/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-auto-import
export {}
declare global {
  const EnumContentType: typeof import('../utils/useEnum')['EnumContentType']
  const EnumDataType: typeof import('../utils/useEnum')['EnumDataType']
  const Link: typeof import('react-router-dom')['Link']
  const NavLink: typeof import('react-router-dom')['NavLink']
  const Navigate: typeof import('react-router-dom')['Navigate']
  const Outlet: typeof import('react-router-dom')['Outlet']
  const REGEXP_CODE_FOUR: typeof import('../utils/useRegexp')['REGEXP_CODE_FOUR']
  const REGEXP_CODE_SIX: typeof import('../utils/useRegexp')['REGEXP_CODE_SIX']
  const REGEXP_EMAIL: typeof import('../utils/useRegexp')['REGEXP_EMAIL']
  const REGEXP_PHONE: typeof import('../utils/useRegexp')['REGEXP_PHONE']
  const REGEXP_PWD: typeof import('../utils/useRegexp')['REGEXP_PWD']
  const REGEXP_URL: typeof import('../utils/useRegexp')['REGEXP_URL']
  const Route: typeof import('react-router-dom')['Route']
  const Routes: typeof import('react-router-dom')['Routes']
  const clearLocal: typeof import('../utils/useStorage')['clearLocal']
  const createRef: typeof import('react')['createRef']
  const decrypto: typeof import('../utils/useCrypto')['decrypto']
  const encrypto: typeof import('../utils/useCrypto')['encrypto']
  const formatJsonToUrlParams: typeof import('../utils/useFormat')['formatJsonToUrlParams']
  const forwardRef: typeof import('react')['forwardRef']
  const get: typeof import('../utils/useHttp')['get']
  const getLocal: typeof import('../utils/useStorage')['getLocal']
  const getSatusColor: typeof import('../stores/helps')['getSatusColor']
  const http: typeof import('../utils/useHttp')['http']
  const isArray: typeof import('../utils/useTypeOf')['isArray']
  const isBoolean: typeof import('../utils/useTypeOf')['isBoolean']
  const isDark: typeof import('../composables/dark')['isDark']
  const isDate: typeof import('../utils/useTypeOf')['isDate']
  const isFile: typeof import('../utils/useTypeOf')['isFile']
  const isFunction: typeof import('../utils/useTypeOf')['isFunction']
  const isMap: typeof import('../utils/useTypeOf')['isMap']
  const isNull: typeof import('../utils/useTypeOf')['isNull']
  const isNumber: typeof import('../utils/useTypeOf')['isNumber']
  const isObject: typeof import('../utils/useTypeOf')['isObject']
  const isRegExp: typeof import('../utils/useTypeOf')['isRegExp']
  const isSet: typeof import('../utils/useTypeOf')['isSet']
  const isString: typeof import('../utils/useTypeOf')['isString']
  const isUndefined: typeof import('../utils/useTypeOf')['isUndefined']
  const lazy: typeof import('react')['lazy']
  const memo: typeof import('react')['memo']
  const post: typeof import('../utils/useHttp')['post']
  const preferredDark: typeof import('../composables/dark')['preferredDark']
  const removeLocal: typeof import('../utils/useStorage')['removeLocal']
  const setLocal: typeof import('../utils/useStorage')['setLocal']
  const startTransition: typeof import('react')['startTransition']
  const toggleDark: typeof import('../composables/dark')['toggleDark']
  const useAppStore: typeof import('../stores/useAppStore')['useAppStore']
  const useAxios: typeof import('../hooks/useAxios')['default']
  const useBScroll: typeof import('../hooks/useBScroll')['useBScroll']
  const useCallback: typeof import('react')['useCallback']
  const useContext: typeof import('react')['useContext']
  const useDebugValue: typeof import('react')['useDebugValue']
  const useDeferredValue: typeof import('react')['useDeferredValue']
  const useEcharts: typeof import('../hooks/useEcharts')['default']
  const useEffect: typeof import('react')['useEffect']
  const useFormat: typeof import('../utils/useFormat')['default']
  const useGet: typeof import('../hooks/useGet')['default']
  const useHref: typeof import('react-router-dom')['useHref']
  const useId: typeof import('react')['useId']
  const useImageVerify: typeof import('../hooks/useImageVerify')['default']
  const useImperativeHandle: typeof import('react')['useImperativeHandle']
  const useInRouterContext: typeof import('react-router-dom')['useInRouterContext']
  const useInsertionEffect: typeof import('react')['useInsertionEffect']
  const useLayoutEffect: typeof import('react')['useLayoutEffect']
  const useLinkClickHandler: typeof import('react-router-dom')['useLinkClickHandler']
  const useLocation: typeof import('react-router-dom')['useLocation']
  const useMemo: typeof import('react')['useMemo']
  const useNavigate: typeof import('react-router-dom')['useNavigate']
  const useNavigationType: typeof import('react-router-dom')['useNavigationType']
  const useOutlet: typeof import('react-router-dom')['useOutlet']
  const useOutletContext: typeof import('react-router-dom')['useOutletContext']
  const useParams: typeof import('react-router-dom')['useParams']
  const usePost: typeof import('../hooks/usePost')['default']
  const useReducer: typeof import('react')['useReducer']
  const useRef: typeof import('react')['useRef']
  const useResolvedPath: typeof import('react-router-dom')['useResolvedPath']
  const useRoutes: typeof import('react-router-dom')['useRoutes']
  const useSearchParams: typeof import('react-router-dom')['useSearchParams']
  const useState: typeof import('react')['useState']
  const useSyncExternalStore: typeof import('react')['useSyncExternalStore']
  const useToggleDark: typeof import('../composables/useToggleDark')['useToggleDark']
  const useTransition: typeof import('react')['useTransition']
  const useTranslation: typeof import('react-i18next')['useTranslation']
}
// for vue template auto import
import { UnwrapRef } from 'vue'
declare module 'vue' {
  interface ComponentCustomProperties {
    readonly EnumContentType: UnwrapRef<typeof import('../utils/useEnum')['EnumContentType']>
    readonly EnumDataType: UnwrapRef<typeof import('../utils/useEnum')['EnumDataType']>
    readonly Link: UnwrapRef<typeof import('react-router-dom')['Link']>
    readonly NavLink: UnwrapRef<typeof import('react-router-dom')['NavLink']>
    readonly Navigate: UnwrapRef<typeof import('react-router-dom')['Navigate']>
    readonly Outlet: UnwrapRef<typeof import('react-router-dom')['Outlet']>
    readonly REGEXP_CODE_FOUR: UnwrapRef<typeof import('../utils/useRegexp')['REGEXP_CODE_FOUR']>
    readonly REGEXP_CODE_SIX: UnwrapRef<typeof import('../utils/useRegexp')['REGEXP_CODE_SIX']>
    readonly REGEXP_EMAIL: UnwrapRef<typeof import('../utils/useRegexp')['REGEXP_EMAIL']>
    readonly REGEXP_PHONE: UnwrapRef<typeof import('../utils/useRegexp')['REGEXP_PHONE']>
    readonly REGEXP_PWD: UnwrapRef<typeof import('../utils/useRegexp')['REGEXP_PWD']>
    readonly REGEXP_URL: UnwrapRef<typeof import('../utils/useRegexp')['REGEXP_URL']>
    readonly Route: UnwrapRef<typeof import('react-router-dom')['Route']>
    readonly Routes: UnwrapRef<typeof import('react-router-dom')['Routes']>
    readonly clearLocal: UnwrapRef<typeof import('../utils/useStorage')['clearLocal']>
    readonly createRef: UnwrapRef<typeof import('react')['createRef']>
    readonly decrypto: UnwrapRef<typeof import('../utils/useCrypto')['decrypto']>
    readonly encrypto: UnwrapRef<typeof import('../utils/useCrypto')['encrypto']>
    readonly formatJsonToUrlParams: UnwrapRef<typeof import('../utils/useFormat')['formatJsonToUrlParams']>
    readonly forwardRef: UnwrapRef<typeof import('react')['forwardRef']>
    readonly get: UnwrapRef<typeof import('../utils/useHttp')['get']>
    readonly getLocal: UnwrapRef<typeof import('../utils/useStorage')['getLocal']>
    readonly getSatusColor: UnwrapRef<typeof import('../stores/helps')['getSatusColor']>
    readonly http: UnwrapRef<typeof import('../utils/useHttp')['http']>
    readonly isArray: UnwrapRef<typeof import('../utils/useTypeOf')['isArray']>
    readonly isBoolean: UnwrapRef<typeof import('../utils/useTypeOf')['isBoolean']>
    readonly isDark: UnwrapRef<typeof import('../composables/dark')['isDark']>
    readonly isDate: UnwrapRef<typeof import('../utils/useTypeOf')['isDate']>
    readonly isFile: UnwrapRef<typeof import('../utils/useTypeOf')['isFile']>
    readonly isFunction: UnwrapRef<typeof import('../utils/useTypeOf')['isFunction']>
    readonly isMap: UnwrapRef<typeof import('../utils/useTypeOf')['isMap']>
    readonly isNull: UnwrapRef<typeof import('../utils/useTypeOf')['isNull']>
    readonly isNumber: UnwrapRef<typeof import('../utils/useTypeOf')['isNumber']>
    readonly isObject: UnwrapRef<typeof import('../utils/useTypeOf')['isObject']>
    readonly isRegExp: UnwrapRef<typeof import('../utils/useTypeOf')['isRegExp']>
    readonly isSet: UnwrapRef<typeof import('../utils/useTypeOf')['isSet']>
    readonly isString: UnwrapRef<typeof import('../utils/useTypeOf')['isString']>
    readonly isUndefined: UnwrapRef<typeof import('../utils/useTypeOf')['isUndefined']>
    readonly lazy: UnwrapRef<typeof import('react')['lazy']>
    readonly memo: UnwrapRef<typeof import('react')['memo']>
    readonly post: UnwrapRef<typeof import('../utils/useHttp')['post']>
    readonly preferredDark: UnwrapRef<typeof import('../composables/dark')['preferredDark']>
    readonly removeLocal: UnwrapRef<typeof import('../utils/useStorage')['removeLocal']>
    readonly setLocal: UnwrapRef<typeof import('../utils/useStorage')['setLocal']>
    readonly startTransition: UnwrapRef<typeof import('react')['startTransition']>
    readonly toggleDark: UnwrapRef<typeof import('../composables/dark')['toggleDark']>
    readonly useAppStore: UnwrapRef<typeof import('../stores/useAppStore')['useAppStore']>
    readonly useAxios: UnwrapRef<typeof import('../hooks/useAxios')['default']>
    readonly useBScroll: UnwrapRef<typeof import('../hooks/useBScroll')['useBScroll']>
    readonly useCallback: UnwrapRef<typeof import('react')['useCallback']>
    readonly useContext: UnwrapRef<typeof import('react')['useContext']>
    readonly useDebugValue: UnwrapRef<typeof import('react')['useDebugValue']>
    readonly useDeferredValue: UnwrapRef<typeof import('react')['useDeferredValue']>
    readonly useEcharts: UnwrapRef<typeof import('../hooks/useEcharts')['default']>
    readonly useEffect: UnwrapRef<typeof import('react')['useEffect']>
    readonly useFormat: UnwrapRef<typeof import('../utils/useFormat')['default']>
    readonly useGet: UnwrapRef<typeof import('../hooks/useGet')['default']>
    readonly useHref: UnwrapRef<typeof import('react-router-dom')['useHref']>
    readonly useId: UnwrapRef<typeof import('react')['useId']>
    readonly useImageVerify: UnwrapRef<typeof import('../hooks/useImageVerify')['default']>
    readonly useImperativeHandle: UnwrapRef<typeof import('react')['useImperativeHandle']>
    readonly useInRouterContext: UnwrapRef<typeof import('react-router-dom')['useInRouterContext']>
    readonly useInsertionEffect: UnwrapRef<typeof import('react')['useInsertionEffect']>
    readonly useLayoutEffect: UnwrapRef<typeof import('react')['useLayoutEffect']>
    readonly useLinkClickHandler: UnwrapRef<typeof import('react-router-dom')['useLinkClickHandler']>
    readonly useLocation: UnwrapRef<typeof import('react-router-dom')['useLocation']>
    readonly useMemo: UnwrapRef<typeof import('react')['useMemo']>
    readonly useNavigate: UnwrapRef<typeof import('react-router-dom')['useNavigate']>
    readonly useNavigationType: UnwrapRef<typeof import('react-router-dom')['useNavigationType']>
    readonly useOutlet: UnwrapRef<typeof import('react-router-dom')['useOutlet']>
    readonly useOutletContext: UnwrapRef<typeof import('react-router-dom')['useOutletContext']>
    readonly useParams: UnwrapRef<typeof import('react-router-dom')['useParams']>
    readonly usePost: UnwrapRef<typeof import('../hooks/usePost')['default']>
    readonly useReducer: UnwrapRef<typeof import('react')['useReducer']>
    readonly useRef: UnwrapRef<typeof import('react')['useRef']>
    readonly useResolvedPath: UnwrapRef<typeof import('react-router-dom')['useResolvedPath']>
    readonly useRoutes: UnwrapRef<typeof import('react-router-dom')['useRoutes']>
    readonly useSearchParams: UnwrapRef<typeof import('react-router-dom')['useSearchParams']>
    readonly useState: UnwrapRef<typeof import('react')['useState']>
    readonly useSyncExternalStore: UnwrapRef<typeof import('react')['useSyncExternalStore']>
    readonly useToggleDark: UnwrapRef<typeof import('../composables/useToggleDark')['useToggleDark']>
    readonly useTransition: UnwrapRef<typeof import('react')['useTransition']>
    readonly useTranslation: UnwrapRef<typeof import('react-i18next')['useTranslation']>
  }
}
