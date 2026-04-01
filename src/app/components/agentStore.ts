// Simple in-memory store for passing agent data between routes
// This avoids relying on router location.state which can be lost on navigation

export interface AgentConfigData {
  name: string;
  expertise: string;
  avatarBg: string;
  avatarImg: string;
  avatarIndex?: number;
}

let pendingAgent: AgentConfigData | null = null;

export function setPendingAgent(data: AgentConfigData) {
  pendingAgent = data;
}

export function getPendingAgent(): AgentConfigData | null {
  return pendingAgent;
}

export function clearPendingAgent() {
  pendingAgent = null;
}