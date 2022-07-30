import { useEffect, useReducer, useRef } from "react"

interface State<T> {
  pending: boolean
  data?: T
  error?: string
}

type Action<T> =
  | { type: "loading" }
  | { type: "success"; data: T }
  | { type: "error"; error: string }

const useFetch = <T = unknown>(
  url: string,
  options?: RequestInit
): State<T> => {
  const cancel = useRef<boolean>(false)

  const initialState: State<T> = {
    pending: false,
    data: undefined,
    error: undefined,
  }

  const reducer = (state: State<T>, action: Action<T>): State<T> => {
    console.log(action.type)
    switch (action.type) {
      case "loading":
        return { ...initialState, pending: true }
      case "success":
        return { ...initialState, data: action.data, pending: false }
      case "error":
        return { ...initialState, error: action.error, pending: false }
      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    cancel.current = false

    const fetchData = async () => {
      dispatch({ type: "loading" })
      try {
        const response = await fetch(url, options)

        if (!response.ok) {
          throw new Error(response.statusText)
        }

        const data = (await response.json()) as T

        if (cancel.current) return // ignore if cancelled

        dispatch({ type: "success", data })
      } catch (error) {
        if (cancel.current) return // ignore if cancelled
        if (error instanceof Error) {
          dispatch({ type: "error", error: error.message })
        } else {
          dispatch({ type: "error", error: "Unknown error" })
        }
      }
    }
    fetchData()

    // Cleanup component unmount
    return () => {
      cancel.current = true
    }
  }, [url])

  return state
}

export default useFetch
