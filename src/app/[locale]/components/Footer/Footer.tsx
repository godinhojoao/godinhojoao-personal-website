type FooterProps = {
  translations: {
    allRightsReserved: string;
    developedBy: string;
  };
};

export const Footer = ({ translations }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white p-4 text-center">
      <p className="text-gray-500">
        &copy; {currentYear} {translations.allRightsReserved} | {translations.developedBy}
        João Godinho
      </p>
    </footer>
  );
};
