import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export type SearchContextState = {
  searchResults: Map<string, string>
  searchTerm: string
  setSearchTerm: (term: string) => void
  refreshData: boolean
  setRefreshData: (refresh: boolean) => void
  router: AppRouterInstance
  pathname: string
}