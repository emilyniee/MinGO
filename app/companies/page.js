import Dropdown from '../components/Dropdown'; // Adjust the import path if needed

export default function Companies() {
  const companyName = 'RBC'; // Or any name you want
  const companyLinks = [
    { name: 'Amplify', url: 'https://jobs.rbc.com/ca/en/amplify' },
    { name: 'Company B', url: '/companies/company-b' },
    { name: 'Company C', url: '/companies/company-c' },
    // Add more companies as needed
  ];

  return (
    <div>
      <h1>Companies Attending the Event</h1>
      <Dropdown companyName={companyName} companyLinks={companyLinks} />
    </div>
  );
}
