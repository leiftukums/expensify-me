import { addExpense, editExpense, removeExpense, setExpenses } from '../../actions/expenses';
import {v4 as uuid} from 'uuid';
import { database } from 'firebase';



beforeEach((done) => {
    const expensesData = {};
    expensesData.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

test('should set up remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should set up edit expense action object', () => {
    const action = editExpense('123abc', {note: 'new note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'new note value'}
    });
});

test('should set up add expense action object with added values', () => {
    const expenseData = {
        description: 'rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action= addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should set up add expense action object with default values', () =>{
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    });
});

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
});