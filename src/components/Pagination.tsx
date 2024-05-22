import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from 'lucide-react'

import { Button } from './ui/button'

interface PaginationProps {
  pageIndex: number
  totalCount: number
  perPage: number
}

export default function Pagination({
  pageIndex,
  perPage,
  totalCount,
}: PaginationProps) {
  const pages = Math.ceil(totalCount / perPage) || 1

  return (
    <div className="flex items-center justify-between">
      <span className="text-sm text-muted-foreground">
        Total de {totalCount} item(s)
      </span>
      <div className="flex items-center gap-6 lg:gap-8">
        <div className="text-sm font-medium">
          Página {pageIndex + 1} de {pages}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <ChevronsLeft className="h-4 w-4" />
            <span className="sr-only">Primeira Pagina</span>
          </Button>
          <Button variant="outline">
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Proxima Pagina</span>
          </Button>
          <Button variant="outline">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only"> Pagina Anterior</span>
          </Button>
          <Button variant="outline">
            <ChevronsRight className="h-4 w-4" />
            <span className="sr-only">Ultima Pagina</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
