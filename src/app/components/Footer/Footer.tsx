export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white p-4 text-center">
      <p className="text-gray-500">
        &copy; {currentYear} Todos os direitos reservados | Desenvolvido por
        João Godinho
      </p>
    </footer>
  );
};
