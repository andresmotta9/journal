import { Route, Routes } from 'react-router-dom';

import { Authroutes } from '../auth/routes/Authroutes';
import { JournalRoutes } from '../journal/routes/JournalRoutes';

export const AppRouter = () => {
  return (
    <Routes>
      {/* Sign in Sign Up */}
      <Route path="/auth/*" element={<Authroutes />} />
      {/* Journal App */}
      <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  );
};
