/*FILTER => filtra la informacion
y retorna un array de elementos que cumple con la condicion 
especificada*/
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // [2, 4, 6, 8, 10]
//tambien se puede escribir asi
/*const evenNumbers2 = numbers.filter(function (number) {
    return number % 2 === 0;
  }); */

  const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
  ];

  const retailCompanies = companies.filter(
    (company) => company.category === 'Retail'
  );
  console.log(retailCompanies);
  const earlyCompanies = companies.filter(
    (company) => company.start >= 1980 && company.end <= 2005
  );
  console.log(earlyCompanies);
  const longCompanies = companies.filter(
    (company) => company.end - company.start >= 10
  );
  console.log(longCompanies);