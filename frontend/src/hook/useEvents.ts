import {useEffect} from "react";

const useCustomEvent = () => {
  function useSubscribe(eventName: string, listener: any) {

    useEffect(() => {
      document.addEventListener(eventName, listener);
      return () => {
        document.removeEventListener(eventName, listener);
      }
    }, [])
  }

  function usePublish() {
    function emit(eventName: string,
                  data?: Record<string, string | number | Function | null | undefined> | string | number) {
      const event = new CustomEvent(eventName, { detail: data });
      document.dispatchEvent(event);
    }
    return { emit };
  }

  return {
    useSubscribe,
    usePublish
  }
}

export default useCustomEvent;