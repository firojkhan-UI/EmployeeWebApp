import React, { useEffect, useState } from 'react';
import { LIST_EMP_URL } from '../../apiUrls';

const ListEmployee = () => {
    const [list, setList] = useState([])

    async function fetchWithRetry(url, options, retries = 3, delay = 2000) {
        try {
            const response = await fetch(url, options);
            if (response.status === 429) { // Rate limit exceeded
                if (retries > 0) {
                    console.log(`Rate limit exceeded. Retrying in ${delay}ms...`);
                    await new Promise(res => setTimeout(res, delay));
                    return fetchWithRetry(url, options, retries - 1, delay * 2);
                } else {
                    throw new Error('Rate limit exceeded. No retries left.');
                }
            }
            return response;
        } catch (error) {
            console.error('Fetch error:', error);
            throw error;
        }
    }
    
    // Usage
    fetchWithRetry('https://dummy.restapiexample.com/api/v1/employees')
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error fetching data:', error));
    

    console.log(list, "list:::::")
    return (<div>
        <h4>List Employee Tabel</h4>
        <div>
            {list?.map((item, id) => <table>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Employee Name
                    </th>
                    <th>
                        Employee Salary
                    </th>
                    <th>
                        Employee Age
                    </th>
                </tr>
            </table> )}
        </div>
    </div>)
}
export default ListEmployee;