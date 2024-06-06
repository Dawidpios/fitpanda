import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@src/components/ui/table";

type statsProps = {
  weight: { value: number; updatedAt: string };
  waist: { value: number; updatedAt: string; };
  biceps: { value: number; updatedAt: string };
  chest: { value: number; updatedAt: string };
};
export function ProgressTracker({ stats }: { stats: statsProps }) {
  return (
    <div className="p-6 md:p-8 lg:p-10 bg-white dark:bg-gray-950 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Fitness Tracker</h2>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Measurement</TableHead>
              <TableHead>Current</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Waist</TableCell>
              <TableCell>{stats.waist.value} cm</TableCell>
              <TableCell>{stats.waist.updatedAt}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Chest</TableCell>
              <TableCell>{stats.chest.value} cm</TableCell>
              <TableCell>{stats.chest.updatedAt}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Biceps</TableCell>
              <TableCell>{stats.biceps.value} cm</TableCell>
              <TableCell>{stats.biceps.updatedAt}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
