import axios from 'axios';
import { SERVER_URL, ROLL_NUMBER } from '../utils/constants';
import { addRows } from '../actions/rowsArrayActions';
import { addIds } from '../actions/idArrayActions';
import { addResp } from '../actions/searchResponsesActions';

export function serviceCall() {
    return axios.post(`${SERVER_URL}`);
}

export function callDummyAPI(name) {
    return axios.post(
        `${SERVER_URL}${ROLL_NUMBER}/dummy.do?`,
        {},
        {
            headers: { 'Content-Type': 'application/json' },
            params: { name: name },
        }
    );
}

export function callDeleteAPI(rowIdToDelete) {
    return axios.delete(
        `${SERVER_URL}${ROLL_NUMBER}/addEdit?`,
        { data: rowIdToDelete }
    );
}

export function callAddAPI(values) { //2020-04-12
    // const dueInDate = values.dueDate.toISOString().substring(0, 4) +
    //  values.dueDate.toISOString().substring(5, 7) + 
    //   values.dueDate.toISOString().substring(8, 10);
    const dueInDate = values.dueDate.toISOString().substring(0, 10);
    const obj = {
        businessCode: null,
        custNumber: values.custNo,
        nameCustomer: values.custName,
        clearDate: null,
        businessYear: null,
        docId: values.invoiceNo,
        postingDate: null,
        documentCreateDate: null,
        dueInDate: dueInDate,
        invoiceCurrency: null,
        documentType: null,
        postingId: null,
        areaBusiness: null,
        totalOpenAmount: values.invoiceAmt,
        baselineCreateDate: null,
        custPaymentTerms: null,
        invoiceId: values.invoiceNo,
        isOpen: null,
        notes: values.notes,
    };
    return axios.post(
        `${SERVER_URL}${ROLL_NUMBER}/addEdit?`,
        obj
    );
}



export async function callSearchAPI(key, setRows, dispatch) {
    axios.get(
        `${SERVER_URL}${ROLL_NUMBER}/search?key=${key}`,
        {},
    ).then((response) => {
        dispatch(addResp(response.data))
        setRows(response.data);
    }, (error) => {
        console.log("Error! : ", error);
    });
}

export function callFetchRecordsAPI(limit, offset, setOffset, dispatch) {
    return axios.get(
        `${SERVER_URL}${ROLL_NUMBER}/addEdit?limit=${limit}&offset=${offset}`,
        {},
    ).then((response) => {
        dispatch(addIds(response.data));
        dispatch(addRows(response.data));
        setOffset(offset + limit);
    }, (error) => {
        console.log("Error! : ", error);
    });
}

