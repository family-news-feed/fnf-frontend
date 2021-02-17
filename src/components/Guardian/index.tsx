import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import guardianData from './guardianData.json';

interface GuardianDataInterface {
  guardian_id: number;
  first_name: string;
  last_name: string;
  time_start: string;
  time_end: string;
  preferred_language: string;
}

function Guardian(): JSX.Element {
  const [data, setData] = useState<GuardianDataInterface[]>([]);

  const fetchData = (): void => {
    // TODO: update this function when we have authentication and backend req/res set up
    setData(guardianData.guardians);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const GuardianTableHead = (): JSX.Element => {
    return (
      <TableHead>
        <TableRow component="tr">
          <TableCell component="th">guardian_id</TableCell>
          <TableCell component="th">first_name</TableCell>
          <TableCell component="th">last_name</TableCell>
          <TableCell component="th">time_start</TableCell>
          <TableCell component="th">time_end</TableCell>
          <TableCell component="th">preferred_language</TableCell>
        </TableRow>
      </TableHead>
    );
  };

  const GuardianTableBody = (): JSX.Element => {
    return (
      <TableBody>
        {data.map(p => (
          <TableRow key={p.guardian_id} component="tr">
            <TableCell component="th">{p.guardian_id}</TableCell>
            <TableCell component="th">{p.first_name}</TableCell>
            <TableCell component="th">{p.last_name}</TableCell>
            <TableCell component="th">{p.time_start}</TableCell>
            <TableCell component="th">{p.time_end}</TableCell>
            <TableCell component="th">{p.preferred_language}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  };

  return (
    <Table component="table" className="GuardianTable">
      {GuardianTableHead()}
      {GuardianTableBody()}
    </Table>
  );
}

export default Guardian;
