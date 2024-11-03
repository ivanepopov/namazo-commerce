export type SearchContextState = {
  searchResults: Map<string, string>
  searchTerm: string
  refreshData: boolean
  setRefreshData: (refresh: boolean) => void
  setSearchTerm: (term: string) => void
}