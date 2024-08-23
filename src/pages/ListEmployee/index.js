import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { LIST_EMP_URL } from '../../apiUrls';
import { useDispatch, useSelector } from 'react-redux';
import { GET_EMP_LIST } from '../../store/ListEmployee/type';

const WrapperTable = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const Table = styled.table`
    border-collapse: collapse;
    width: 80%;
    margin: 20px 0;
    border: 1px solid #ddd;
`;

const Th = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    background-color: #f4f4f4;
`;

const Td = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`;

const ListEmployee = () => {
    const state  = useSelector( state => state?.listEmployee?.listEmployee)
    console.log(state,"list component::::")
    const dispatch = useDispatch()
    const [list, setList] = useState([]);

    useEffect( () => {
        dispatch({type: GET_EMP_LIST})
    } ,[])

    // async function fetchWithRetry(url, options, retries = 3, delay = 2000) {
    //     try {
    //         const response = await fetch(url, options);
    //         if (response.status === 429) { // Rate limit exceeded
    //             if (retries > 0) {
    //                 console.log(`Rate limit exceeded. Retrying in ${delay}ms...`);
    //                 await new Promise(res => setTimeout(res, delay));
    //                 return fetchWithRetry(url, options, retries - 1, delay * 2);
    //             } else {
    //                 throw new Error('Rate limit exceeded. No retries left.');
    //             }
    //         }
    //         return response;
    //     } catch (error) {
    //         console.error('Fetch error:', error);
    //         throw error;
    //     }
    // }

    // useEffect(() => {
    //     fetchWithRetry(LIST_EMP_URL)
    //         .then(response => response.json())
    //         .then(data => setList(data || []))
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);

    return (
        <WrapperTable>
            <Table>
                <thead>
                    <tr>
                        <Th>ID</Th>
                        <Th>Employee Name</Th>
                        <Th>Employee Salary</Th>
                        <Th>Passport</Th>
                    </tr>
                </thead>
                <tbody>
                    {state.map(item => (
                        <tr key={item.id}>
                            <Td>{item.id}</Td>
                            <Td>{item.firstName}</Td>
                            <Td>{item.lastName}</Td>
                            <Td style={{color: item?.checkbox ? 'green' : 'red'}}>{item?.checkbox ? "Yes" : "No"}</Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </WrapperTable>
    );
};

export default ListEmployee;
