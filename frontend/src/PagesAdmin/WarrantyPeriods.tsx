import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { BASE_URL } from '../App';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import ButtonAddWarrantyPeriod from '../Components/Button/button-add-warranty-period';
import WarrantyPeriodAdminStatus from '../Components/WarrantyPeriodAdminStatus/WarrantyPeriodAdminStatus';

interface WarrantyPeriod {
  id: string;
  months: number;
}

const WarrantyPeriodsAdmin = () => {
  const [warrantyPeriods, setWarrantyPeriods] = useState<WarrantyPeriod[]>([]);

  const fetchWarrantyPeriods = useCallback(async () => {
    const response = await axios.get(`${BASE_URL}/warranty-period`);
    setWarrantyPeriods(response.data);
  }, []);

  useEffect(() => {
    fetchWarrantyPeriods();
  }, [fetchWarrantyPeriods]);

  return (
    <MantineProvider>
      <ModalsProvider>
        <div className="header-content">
          <h4 className="page-title">Warranty Period</h4>
          <Breadcrumbs />
        </div>
        <div className="body-content">
          <div className="button-admin">
            <ButtonAddWarrantyPeriod onFinish={() => {}} />
          </div>
          <table className="table-centered">
            <thead className="table-light">
              <tr>
                <th className="sorting" style={{ width: '150px' }}>
                  ID
                </th>
                <th className="sorting">Months</th>
                <th className="sorting" style={{ width: '150px' }}>
                  Action
                </th>
              </tr>
            </thead>
            {warrantyPeriods.map((warrantyPeriod) => (
              <WarrantyPeriodAdminStatus
                key={warrantyPeriod.id}
                id={warrantyPeriod.id}
                months={warrantyPeriod.months}
              />
            ))}
          </table>
        </div>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default WarrantyPeriodsAdmin;
