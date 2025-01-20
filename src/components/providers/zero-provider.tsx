'use client';

import React from 'react';
import { ZeroProvider } from '@rocicorp/zero/react';
import { getZeroClient } from '@/db/zero-client';

export default function ZeroRootProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	const z = getZeroClient();

	return <ZeroProvider zero={z}>{children}</ZeroProvider>;
}
