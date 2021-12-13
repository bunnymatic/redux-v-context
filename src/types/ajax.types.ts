export enum AjaxStatuses {
  Idle = "idle",
  Pending = "pending",
  Success = "success",
  Failure = "failure",
}

export interface UseAjaxStateType<ResponseType> {
  status: AjaxStatuses;
  data: ResponseType | null;
  error: string | null;
}

export interface UseAjaxSetters<ResponseType> {
  setSuccess: (data: ResponseType) => void;
  setFailure: (error?: string | null) => void;
  setPending: () => void;
  setInitialState: () => void;
}
