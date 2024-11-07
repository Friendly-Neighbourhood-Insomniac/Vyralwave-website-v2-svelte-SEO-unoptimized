export const voiceflowConfig = {
  apiKey: import.meta.env.VITE_VOICEFLOW_API_KEY,
  projectId: import.meta.env.VITE_VOICEFLOW_PROJECT_ID,
  versionId: import.meta.env.VITE_VOICEFLOW_VERSION_ID,
  baseUrl: 'https://general-runtime.voiceflow.com'
} as const;