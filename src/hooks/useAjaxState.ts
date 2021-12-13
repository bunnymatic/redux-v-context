import { AjaxStatuses, UseAjaxSetters, UseAjaxStateType } from "../types";
import { Dispatch, SetStateAction, useState } from "react";

const pristineUseAjaxState = {
  status: AjaxStatuses.Idle,
  data: null,
  error: null,
};

function successHandler<ResponseType>(
  setState: Dispatch<SetStateAction<UseAjaxStateType<ResponseType>>>
) {
  return (data: ResponseType) => {
    setState({
      status: AjaxStatuses.Success,
      data,
      error: null,
    });
  };
}
function failureHandler<ResponseType>(
  setState: Dispatch<SetStateAction<UseAjaxStateType<ResponseType>>>
) {
  return (error: string | null = null) => {
    setState((state) => ({
      status: AjaxStatuses.Failure,
      data: state.data,
      error,
    }));
  };
}
function pendingHandler<ResponseType>(
  setState: Dispatch<SetStateAction<UseAjaxStateType<ResponseType>>>
) {
  return () => {
    setState((state) => ({
      ...state,
      status: AjaxStatuses.Pending,
    }));
  };
}
function initialStateHandler<ResponseType>(
  setState: Dispatch<SetStateAction<UseAjaxStateType<ResponseType>>>
) {
  return () => {
    setState({ ...pristineUseAjaxState });
  };
}

export const useAjaxState = <ResponseType = void>(
  initialData?: ResponseType,
  initialError?: string
): [UseAjaxStateType<ResponseType>, UseAjaxSetters<ResponseType>] => {
  const initialState: UseAjaxStateType<ResponseType> = {
    ...pristineUseAjaxState,
  };

  if (initialData) {
    initialState.data = initialData;
    initialState.status = AjaxStatuses.Success;
  }
  if (initialError) {
    initialState.error = initialError;
    initialState.status = AjaxStatuses.Failure;
  }
  const [state, setState] =
    useState<UseAjaxStateType<ResponseType>>(initialState);

  return [
    state,
    {
      setSuccess: successHandler<ResponseType>(setState),
      setFailure: failureHandler<ResponseType>(setState),
      setPending: pendingHandler<ResponseType>(setState),
      setInitialState: initialStateHandler<ResponseType>(setState),
    },
  ];
};
