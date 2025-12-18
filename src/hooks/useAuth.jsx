import React, { use } from 'react';
import { AuthContest } from '../AuthContest';

const useAuth = () => {
    const authInfo = use(AuthContest);
    return authInfo;
};

export default useAuth;