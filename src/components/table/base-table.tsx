import { objectKeys } from '@/utils/ObjectKeyValues';

type PrimitiveType = string | Symbol | number | boolean;

// Type guard for the primitive types which will support printing
// out of the box
const isPrimitive = (value: any): value is PrimitiveType => {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    typeof value === 'symbol'
  );
};

export interface BaseTableItem {
  id: string;
}

export type TableHeaders<T extends BaseTableItem> = Record<keyof T, string>;

export type HeaderCustomRenderer<Item extends BaseTableItem> = (
  header: keyof Item,
  index: number
) => React.ReactNode;

export type HeaderCustomRenderers<Item extends BaseTableItem> = Partial<
  Record<keyof Item, HeaderCustomRenderer<Item>>
>;

type RowCustomRenderer<
  Item extends BaseTableItem,
  Headers extends TableHeaders<Item>
> = (headers: Headers, item: Item) => React.ReactNode;

type RowCustomRenderers<
  Item extends BaseTableItem,
  Headers extends TableHeaders<Item>
> = Partial<Record<keyof Item, RowCustomRenderer<Item, Headers>>>;

export interface BaseTableProps<
  Item extends BaseTableItem,
  Headers extends TableHeaders<Item>
> {
  items: Item[];
  headers: Headers;
  rowCustomRenderers?: RowCustomRenderers<Item, Headers>;
  headerCustomRenderers?: HeaderCustomRenderers<Item>;
}

export default function BaseTable<
  Item extends BaseTableItem,
  Headers extends TableHeaders<Item>
>({
  headers,
  items,
  headerCustomRenderers,
  rowCustomRenderers,
}: BaseTableProps<Item, Headers>) {
  const renderHeader: HeaderCustomRenderer<Item> = (header, index) => {
    if (headerCustomRenderers) {
      const customRenderer = headerCustomRenderers[header];

      if (customRenderer) {
        return customRenderer(header, index);
      }
    }

    return (
      <th
        key={header.toString()}
        scope="col"
        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
      >
        <a href="#" className="group inline-flex">
          {headers[header]}
        </a>
      </th>
    );
  };

  const renderRow: RowCustomRenderer<Item, Headers> = (columns, row) => {
    // TODO: Work on component key.
    return (
      <tr key={`table-row-${row.id}`}>
        {objectKeys(columns).map((key) => {
          if (rowCustomRenderers) {
            const customRenderer = rowCustomRenderers[key as keyof Item];

            if (customRenderer) {
              return customRenderer(columns, row);
            }
          }

          // TODO: Work on component key.
          return (
            <td
              key={`${key}-${row.id}`}
              className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
            >
              {isPrimitive(row[key as keyof Item])
                ? row[key as keyof Item]
                : ''}
            </td>
          );
        })}
      </tr>
    );
  };

  return (
    <table className="min-w-full divide-y divide-gray-300">
      <thead className="bg-gray-50">
        <tr>
          {objectKeys(headers).map((key, index) =>
            renderHeader(key as keyof Item, index)
          )}
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {items.map((item) => renderRow(headers, item))}
      </tbody>
    </table>
  );
}
