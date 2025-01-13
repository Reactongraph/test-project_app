import React from 'react';

export const LazyProjectList = React.lazy(() => import('../molecule/ProjectList'));
export const LazyProjectEdit = React.lazy(() => import('../organism/ProjectEdit'));
