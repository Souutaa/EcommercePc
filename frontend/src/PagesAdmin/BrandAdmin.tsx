import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { BASE_URL } from '../App';
import BrandAdminStatus from '../Components/BrandAdminStatus/BrandAdminStatus';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import ButtonAddBrands from '../Components/Button/button-add-brands';
import { Category } from '../Pages/HomePage/Content';

const BrandAdmin = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const fetchCategories = useCallback(async () => {
    const response = await axios.get(
      `${BASE_URL}/category/all/simple?active=false`
    );
    setCategories(response.data);
  }, []);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div>
      <div className="header-content">
        <h4 className="page-title">Brands</h4>
        <Breadcrumbs />
      </div>
      <div className="body-content">
        <div className="button-admin">
          <ButtonAddBrands onFinish={fetchCategories} />
        </div>
        {categories.map((category) => (
          <table className="table-centered">
            <thead className="table-light">
              <tr>
                <td
                  className="sorting"
                  colSpan={3}
                  style={{ textAlign: 'center' }}
                >
                  {category.name}
                </td>
              </tr>
              <tr>
                <th className="sorting" style={{ width: '150px' }}>
                  ID
                </th>
                <th className="sorting">Name Brand</th>
                <th className="sorting" style={{ width: '150px' }}>
                  Action
                </th>
              </tr>
            </thead>
            {category.brands.map((brand) => (
              <BrandAdminStatus
                key={brand.id}
                id={brand.id}
                name={brand.brandName}
              />
            ))}
          </table>
        ))}
      </div>
    </div>
  );
};

export default BrandAdmin;
