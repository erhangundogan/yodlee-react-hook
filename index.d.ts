export type UserExperienceFlowType = 'Aggregation' | 'Verification' | 'Aggregation plus Verification';

export interface FastLinkOptionsType {
  fastLinkURL: string;
  accessToken?: string;
  jwtToken?: string;
  userExperienceFlow?: UserExperienceFlowType;
}

export interface YodleeHookPropsType {
  containerId: string;
  fastLinkOptions: FastLinkOptionsType;
  onSuccess?: (args: any) => void;
  onError?: (args: any) => void;
  onExit?: (args: any) => void;
  onEvent?: (args: any) => void;
}

export interface YodleeHookReturnType {
  init: () => void;
  data: any;
  error: any;
  ready: boolean;
  active: boolean;
}

export interface YodleeHookType {
  (props: YodleeHookPropsType): YodleeHookReturnType;
}

declare global {
  interface Window { fastlink: any; }
}
