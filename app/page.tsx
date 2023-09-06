'use client';

import ApplicationLogo from '@/app/components/shared/ApplicationLogo';
import LoadingSpinner from '@/app/components/shared/LoadingSpinner';
import OtherLoginOption from '@/app/components/shared/OtherLoginOption';
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
	const [username, setUsername] = useState('kzamanbn@gmail.com');
	const [password, setPassword] = useState('password');
	const [loginError, setLoginError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('login');
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
		}, 2000);
	};

	return (
		<div className="bg-light-gray dark:bg-dark-secondary dark:text-gray-300 lg:h-screen lg:overflow-hidden">
			<div className="flex min-h-screen items-center justify-center p-6">
				<div className="login-bg">
					<div className="rounded-md bg-white p-8 shadow-md">
						<div className="my-4 flex items-center justify-center space-x-2">
							<span className="h-12 w-12">
								<ApplicationLogo />
							</span>
							<span className="dark--text text-3xl font-semibold">RTK Chat</span>
						</div>
						<p className="text-xs text-center text-gray-600">
							Please sign-in to your account and start the adventure
						</p>

						<OtherLoginOption />

						<form className="mt-4" onSubmit={handleSubmit}>
							{loginError && <div className="text-red-500 text-center">{loginError}</div>}
							<label className="block">
								<span className="form-label">Email</span>
								<input
									type="email"
									name="email"
									className="form-input"
									placeholder="Email Address"
									value={username}
									required
									onChange={(e) => setUsername(e.target.value)}
								/>
							</label>

							<label className="mt-3 block">
								<span className="form-label">Password</span>
								<input
									type="password"
									name="password"
									className="form-input"
									placeholder="********"
									value={password}
									required
									onChange={(e) => setPassword(e.target.value)}
								/>
							</label>

							<div className="mt-4 flex items-center justify-between">
								<label className="inline-flex items-center">
									<input type="checkbox" name="remember" className="form-checkbox" />
									<span className="dark--text mx-2 text-sm">Remember me</span>
								</label>

								<a
									className="block text-sm text-primary-600 hover:underline"
									href="/auth-forgot-password.html">
									Forgot your password?
								</a>
							</div>

							<div className="mt-6">
								<button type="submit" className="btn btn-primary flex w-full" disabled={isLoading}>
									<span className="mr-2">Sign in to your account</span>
									<LoadingSpinner isLoading={isLoading} />
								</button>
							</div>
						</form>
						<p className="dark--text mt-4">
							Don’t have an account yet?
							<Link href="/register" className="text-primary ml-2">
								Sign up here
							</Link>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
