export interface ChatMessage {
  message: string;
  isUser: boolean;
  delay?: number;
}

export interface VoiceflowConfig {
  apiKey: string;
  projectId: string;
  versionId: string;
  baseUrl: string;
}

export interface VoiceflowResponse {
  trace: Array<{
    type: string;
    payload: {
      message?: string;
      text?: string;
      delay?: number;
      buttons?: Array<{ name: string }>;
    };
  }>;
}