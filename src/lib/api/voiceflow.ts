import type { ChatMessage, VoiceflowConfig, VoiceflowResponse } from '../types/chat';
import { voiceflowConfig } from '../config/voiceflow';

class VoiceflowAPI {
  private config: VoiceflowConfig;

  constructor(config: VoiceflowConfig) {
    this.config = config;
  }

  private async makeRequest(endpoint: string, body: any): Promise<VoiceflowResponse> {
    const response = await fetch(`${this.config.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${this.config.apiKey}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'versionID': this.config.versionId
      },
      body: JSON.stringify({
        ...body,
        projectID: this.config.projectId,
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  private processResponse(data: VoiceflowResponse): ChatMessage[] {
    if (!data?.trace?.length) {
      return [];
    }

    return data.trace.reduce((messages: ChatMessage[], trace) => {
      if (trace.type === 'text' || trace.type === 'speak') {
        const message = trace.payload?.message || trace.payload?.text;
        if (message) {
          messages.push({
            message,
            isUser: false,
            delay: trace.payload?.delay || 0
          });
        }
      } else if (trace.type === 'choice' && Array.isArray(trace.payload?.buttons)) {
        const choices = trace.payload.buttons
          .map(button => button.name)
          .join('\n');
        if (choices) {
          messages.push({
            message: choices,
            isUser: false,
            delay: 0
          });
        }
      }
      return messages;
    }, []);
  }

  async startConversation(): Promise<ChatMessage[]> {
    try {
      const data = await this.makeRequest('/state/user/interact', {
        action: { type: 'launch' }
      });
      return this.processResponse(data);
    } catch (error) {
      console.error('Failed to start conversation:', error);
      throw new Error('Failed to start conversation. Please try again.');
    }
  }

  async sendMessage(message: string, userId: string): Promise<ChatMessage[]> {
    try {
      const data = await this.makeRequest('/state/user/interact', {
        action: {
          type: 'text',
          payload: message
        },
        userID: userId
      });
      return this.processResponse(data);
    } catch (error) {
      console.error('Failed to send message:', error);
      throw new Error('Failed to send message. Please try again.');
    }
  }
}

export const voiceflowApi = new VoiceflowAPI(voiceflowConfig);