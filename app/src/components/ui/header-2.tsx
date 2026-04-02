'use client';
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { MenuToggleIcon } from '@/components/ui/menu-toggle-icon';
import { useScroll } from '@/components/ui/use-scroll';
import { useI18n, Language } from '@/lib/i18n';

// Language icon component
function LanguageIcon({ className }: { className?: string }) {
	return (
		<svg 
			className={className} 
			viewBox="0 0 24 24" 
			fill="none" 
			stroke="currentColor" 
			strokeWidth="2" 
			strokeLinecap="round" 
			strokeLinejoin="round"
		>
			<circle cx="12" cy="12" r="10" />
			<path d="M2 12h20" />
			<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
		</svg>
	);
}

interface HeaderProps {
	links?: { label: string; href: string }[];
	className?: string;
	onScrolledChange?: (scrolled: boolean) => void;
}

export function Header({ links: customLinks, className, onScrolledChange }: HeaderProps) {
	const [open, setOpen] = React.useState(false);
	const [langMenuOpen, setLangMenuOpen] = React.useState(false);
	const scrolled = useScroll(10);
	const langMenuRef = React.useRef<HTMLDivElement>(null);
	const { language, setLanguage, t } = useI18n();

	// Notify parent when scrolled state changes
	React.useEffect(() => {
		onScrolledChange?.(scrolled);
	}, [scrolled, onScrolledChange]);

	// Close language menu when clicking outside
	React.useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
				setLangMenuOpen(false);
			}
		}
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	const links = customLinks || [
		{ label: t.menu.kazakh, href: '/kazakh' },
		{ label: t.menu.turkic, href: '/turkic' },
		{ label: t.menu.world, href: '/world' },
	];

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}

		return () => {
			document.body.style.overflow = '';
		};
	}, [open]);

	const handleLanguageChange = (lang: Language) => {
		setLanguage(lang);
		setLangMenuOpen(false);
	};

	const languageLabels: Record<Language, string> = {
		kk: 'ҚАЗ',
		ru: 'РУС',
		en: 'ENG',
	};

	return (
		<header
			className={cn(
				'fixed top-0 left-0 right-0 z-50 mx-auto w-full transition-all duration-500 ease-out',
				{
					'max-w-4xl top-4 rounded-md': scrolled && !open,
					'max-w-full': !scrolled || open,
				},
				className
			)}
		>
			{/* Main header content */}
			<nav
				className={cn(
					'flex w-full items-center justify-between px-4 transition-all duration-500 ease-out',
					{
						'h-12 bg-white/95 supports-[backdrop-filter]:bg-white/80 backdrop-blur-lg rounded-md shadow-lg': scrolled && !open,
						'h-14 bg-transparent': !scrolled,
					},
					open && 'bg-slate-900/90 backdrop-blur-lg',
				)}
			>
				<span 
				className={cn(
					"text-sm md:text-xl transition-colors duration-500 whitespace-nowrap font-semibold",
					scrolled ? "text-slate-900" : "text-white"
				)}
				style={{ fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif' }}
			>
				{t.header.museumName}
			</span>
				<div className="hidden items-center gap-2 md:flex">
					{links.map((link, i) => (
						<a 
							key={i} 
							className={cn(
								buttonVariants({ variant: 'ghost' }),
								"transition-colors duration-500",
								scrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/10"
							)} 
							href={link.href}
						>
							{link.label}
						</a>
					))}
					
					{/* Language Toggle */}
					<div className="relative" ref={langMenuRef}>
						<Button 
							variant="outline" 
							size="sm"
							onClick={() => setLangMenuOpen(!langMenuOpen)}
							className={cn(
								"transition-colors duration-500 gap-1.5 min-w-[70px] bg-white border-slate-300 text-slate-900 hover:bg-slate-100"
							)}
						>
							<LanguageIcon className="size-4" />
							<span className="text-xs font-medium">{languageLabels[language]}</span>
						</Button>
						
						<AnimatePresence>
							{langMenuOpen && (
								<motion.div
									initial={{ opacity: 0, y: -10, scale: 0.95 }}
									animate={{ opacity: 1, y: 0, scale: 1 }}
									exit={{ opacity: 0, y: -10, scale: 0.95 }}
									transition={{ duration: 0.15 }}
									className="absolute right-0 top-full mt-2 py-1 rounded-md shadow-lg min-w-[120px] overflow-hidden bg-white border border-slate-200"
								>
									{(['kk', 'ru', 'en'] as Language[]).map((lang) => (
										<button
											key={lang}
											onClick={() => handleLanguageChange(lang)}
											className={cn(
												"w-full px-3 py-2 text-left text-sm transition-colors flex items-center justify-between hover:bg-slate-100 text-slate-900",
												language === lang && "bg-slate-100"
											)}
										>
											<span>{t.languages[lang]}</span>
											{language === lang && (
												<svg className="size-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
													<polyline points="20 6 9 17 4 12" />
												</svg>
											)}
										</button>
									))}
								</motion.div>
							)}
						</AnimatePresence>
					</div>
					
					{/* Contacts Button */}
					<Button className={cn(
						"transition-colors duration-500",
						scrolled 
							? "bg-slate-900 text-white hover:bg-slate-800" 
							: "bg-white text-slate-900 hover:bg-white/90"
					)}>
						{t.header.contacts}
					</Button>
				</div>
				<Button 
					size="icon" 
					variant="outline" 
					onClick={() => setOpen(!open)} 
					className={cn(
						"md:hidden transition-colors duration-500 h-11 w-11",
						scrolled 
							? "border-slate-300 text-slate-900" 
							: "border-white/30 text-white"
					)}
				>
					<MenuToggleIcon open={open} className="size-6" duration={300} />
				</Button>
			</nav>

			{/* Light bar - emitted from header bottom */}
			<motion.div
				initial={{ opacity: 0, width: 0 }}
				animate={{ 
					opacity: scrolled ? 1 : 0, 
					width: scrolled ? "30rem" : 0 
				}}
				transition={{
					duration: 0.5,
					ease: "easeOut",
				}}
				className="absolute left-1/2 -translate-x-1/2 h-[2px] z-50"
				style={{ 
					top: '100%',
					background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 20%, white 50%, rgba(255,255,255,0.9) 80%, transparent 100%)',
					boxShadow: '0 0 20px 5px rgba(255, 255, 255, 0.5), 0 0 40px 10px rgba(255, 255, 255, 0.3)',
				}}
			/>

			{/* Mobile menu */}
			<div
				className={cn(
					'bg-slate-900/95 backdrop-blur-lg fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-t border-white/10 md:hidden',
					open ? 'block' : 'hidden',
				)}
			>
				<div
					data-slot={open ? 'open' : 'closed'}
					className={cn(
						'data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out',
						'flex h-full w-full flex-col justify-between gap-y-2 p-4',
					)}
				>
					<div className="grid gap-y-2">
						{links.map((link) => (
							<a
								key={link.label}
								className={buttonVariants({
									variant: 'ghost',
									className: 'justify-start text-white hover:bg-white/10',
								})}
								href={link.href}
							>
								{link.label}
							</a>
						))}
					</div>
					<div className="flex flex-col gap-2">
						{/* Mobile Language Selector */}
						<div className="grid grid-cols-3 gap-2">
							{(['kk', 'ru', 'en'] as Language[]).map((lang) => (
								<Button 
									key={lang}
									variant="outline" 
									onClick={() => handleLanguageChange(lang)}
									className={cn(
										"bg-white/10 border-white/30 text-white hover:bg-white/20",
										language === lang && "bg-white text-slate-900 border-white hover:bg-white/90"
									)}
								>
									{languageLabels[lang]}
								</Button>
							))}
						</div>
						<Button className="w-full bg-white text-slate-900 hover:bg-white/90">
							{t.header.contacts}
						</Button>
					</div>
				</div>
			</div>
		</header>
	);
}
