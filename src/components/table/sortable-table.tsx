import { useState } from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

import BaseTable, {
  BaseTableItem,
  BaseTableProps,
  HeaderCustomRenderer,
  HeaderCustomRenderers,
  TableHeaders,
} from '@/components/table/base-table';
import { objectKeys } from '@/utils/ObjectKeyValues';

export type SortDirection = 'ASC' | 'DESC' | null;

type HeaderSortDirection = Partial<Record<keyof BaseTableItem, SortDirection>>;

type SortableTableProps = {
  onSortColumn: (
    header: keyof BaseTableItem,
    direction?: SortDirection
  ) => void;
} & BaseTableProps<BaseTableItem, TableHeaders<BaseTableItem>>;

const SortableTable = ({
  headers,
  items,
  onSortColumn,
}: SortableTableProps) => {
  const [headerSortDirection, setHeaderSortDirection] =
    useState<HeaderSortDirection>({});

  const toggleSortColumn = (header: keyof BaseTableItem) => {
    let sortDirection = headerSortDirection[header];

    if (!sortDirection) sortDirection = 'DESC';
    else if (sortDirection === 'DESC') sortDirection = 'ASC';
    else if (sortDirection === 'ASC') sortDirection = null;

    setHeaderSortDirection({
      [header]: sortDirection,
    });

    onSortColumn(header, sortDirection);
  };

  const renderSortChevronArrow = (sortDirection?: SortDirection) => {
    if (sortDirection === 'ASC')
      return (
        <span className="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
          <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
        </span>
      );

    if (sortDirection === 'DESC')
      return (
        <span className="ml-2 flex-none rounded bg-gray-200 text-gray-900 group-hover:bg-gray-300">
          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
        </span>
      );

    return (
      <span className="invisible ml-2 flex-none rounded text-gray-400 group-hover:visible group-focus:visible">
        <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />
      </span>
    );
  };

  const renderSortableHeader: HeaderCustomRenderer<BaseTableItem> = (
    header: keyof BaseTableItem,
    index: number
  ) => {
    const headerClassNames =
      index === 0
        ? 'py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6'
        : 'px-3 py-3.5 text-left text-sm font-semibold text-gray-900';

    return (
      <th key={header} scope="col" className={headerClassNames}>
        <a
          onClick={() => toggleSortColumn(header)}
          className="group inline-flex"
        >
          {headers[header]}
          {renderSortChevronArrow(headerSortDirection[header])}
        </a>
      </th>
    );
  };

  const headerCustomRenderers: HeaderCustomRenderers<BaseTableItem> =
    objectKeys(headers).reduce(
      (renderers, header) => ({
        ...renderers,
        [header]: renderSortableHeader,
      }),
      {}
    );

  return (
    <BaseTable
      items={items}
      headers={headers}
      headerCustomRenderers={headerCustomRenderers}
    />
  );
};

export default SortableTable;
