import React, { useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import patientData from './patientData.json';

interface PatientDataInterface {
  mrn: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  last_status: string;
  is_eligible: boolean;
}

function Patient(): JSX.Element {
  const [data, setData] = useState<PatientDataInterface[]>([]);

  const fetchData = (): void => {
    // TODO: update this function when we have authentication and backend req/res set up
    setData(patientData.patients);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const patientTableHead = (): JSX.Element => {
    return (
      <TableHead>
        <TableRow component="tr">
          <TableCell component="th">mrn</TableCell>
          <TableCell component="th">first_name</TableCell>
          <TableCell component="th">last_name</TableCell>
          <TableCell component="th">phone_number</TableCell>
          <TableCell component="th">last_status</TableCell>
          <TableCell component="th">is_eligible</TableCell>
        </TableRow>
      </TableHead>
    );
  };

  const patientTableBody = (): JSX.Element => {
    return (
      <TableBody>
        {data.map(p => (
          <TableRow key={p.mrn} component="tr">
            <TableCell component="th">{p.mrn}</TableCell>
            <TableCell component="th">{p.first_name}</TableCell>
            <TableCell component="th">{p.last_name}</TableCell>
            <TableCell component="th">{p.phone_number}</TableCell>
            <TableCell component="th">{p.last_status}</TableCell>
            <TableCell component="th">
              {p.is_eligible ? 'true' : 'false'}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    );
  };

  return (
    <Table component="table" className="PatientTable">
      {patientTableHead()}
      {patientTableBody()}
    </Table>
  );
}

export default Patient;
