import type { Meta, StoryObj } from '@storybook/react';
import { DataTable } from './DataTable';

type User = { id: number; name: string; email: string; age: number; status: 'Active'|'Invited'|'Disabled' };
const users: User[] = [
  { id: 1, name: 'Anita', email: 'anita@acme.io', age: 28, status: 'Active' },
  { id: 2, name: 'Bala', email: 'bala@acme.io', age: 35, status: 'Invited' },
  { id: 3, name: 'Chirag', email: 'chirag@acme.io', age: 22, status: 'Active' },
  { id: 4, name: 'Deepti', email: 'deepti@acme.io', age: 41, status: 'Disabled' }
];

const columns = [
  { header: 'Name', accessor: 'name' as const, width: 180 },
  { header: 'Email', accessor: 'email' as const, width: 220 },
  { header: 'Age', accessor: 'age' as const, width: 80, sortable: true },
  {
    header: 'Status',
    accessor: (u: User) => u.status,
    id: 'status',
    sortable: true
  }
];

const meta: Meta<typeof DataTable<User>> = {
  title: 'Data Display/DataTable',
  component: DataTable<User>,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Generic, accessible data table with sorting, row selection (single/multiple), loading and empty states.'
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof DataTable<User>>;

export const Basic: Story = {
  args: {
    data: users,
    columns,
    selectable: false,
    loading: false,
    ariaLabel: 'Users table'
  }
};

export const SortableAndSelectable: Story = {
  render: (args) => (
    <DataTable<User>
      {...args}
      onRowSelect={(rows) => console.log('Selected rows', rows)}
    />
  ),
  args: {
    data: users,
    columns,
    selectable: true,
    selectionMode: 'multiple'
  }
};

export const SingleSelection: Story = {
  args: {
    data: users,
    columns,
    selectable: true,
    selectionMode: 'single'
  }
};

export const LoadingAndEmpty: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, width: 600 }}>
      <DataTable<User> data={[]} columns={columns} loading emptyMessage="Fetching users..." />
      <DataTable<User> data={[]} columns={columns} loading={false} emptyMessage="No users yet." />
    </div>
  )
};
