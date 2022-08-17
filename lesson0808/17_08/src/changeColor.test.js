const changeColor = require('./changeColor');





test('Проверка changeColor',()=>{
   expect(changeColor('','red', 'green')).toBe('')
   expect(changeColor(undefined,'red', 'green')).toBe('')
   expect(changeColor('red apple','red', 'green')).toBe('green apple')
   expect(changeColor('red apple','blue', 'green')).toBe('red apple')
   expect(changeColor('red apple','blue', '')).toBe('red apple')
   expect(changeColor(' red apple ','blue', '')).toBe(' red apple ')
   expect(changeColor(' Red apple ','blue', '',true)).toBe(' red apple ')
});