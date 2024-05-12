"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Tooltip } from "@nextui-org/tooltip";
import { getData } from '@/lib/api';
import ServerInfo from './serverinfo';

function NavItem(props: { href: string, mobile?: boolean, children: React.ReactNode, expanded?: boolean }) {
  return (
    <span className={`transition-opacity duration-300 motion-reduce:transition-none ${props.expanded ? 'visible opacity-100' : 'invisible opacity-0'}`}>
      <Link href={props.href}>{props.children}</Link>
    </span>
  );
}

export default function Navbar() {
  // Hiding the navbar when scrolling down and bringing it back when scrolling up
  const [scrollDirection, setScrollDirection] = useState('none');

  // For later
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY || document.documentElement.scrollTop;

      if (currentScroll > lastScrollTop) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
        setExpanded(false);
      }

      lastScrollTop = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Mobile navbar expanding
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1280);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText("mc.zsł.pl")
      .then(() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1500); // Reset copied state after 1.5 seconds
      })
      .catch((error) => {
        console.error('Failed to copy:', error);
      });
  };

  const [serverData, setServerData] = useState(null);

  useEffect(() => {
    getData()
      .then(data => setServerData(data))
      .catch(error => console.error('Failed to fetch server data:', error));
  }, []);

  var showNavItems = expanded || !isMobile;

  return (
    <nav onClick={isMobile ? toggleExpanded : undefined} className={`fixed top-0 left-0 ${expanded ? 'h-full' : 'h-14'} w-full backdrop-blur-md bg-opacity-10 flex flex-col xl:flex-row items-center justify-center xl:justify-normal gap-10 px-10 box-border text-lg font-lexend-deca font-light z-50 transition-transform ease-out duration-500 motion-reduce:transition-none ${scrollDirection === 'down' && '-translate-y-full'}`}>
      <NavItem href="/" expanded={showNavItems}>Strona główna</NavItem>
      <NavItem href="/regulamin" expanded={showNavItems}>Regulamin</NavItem>
      <NavItem href="https://dc.zsł.pl/" expanded={showNavItems}>Discord</NavItem>
      <NavItem href="https://patreon.com/zsł/" expanded={showNavItems}>Patreon</NavItem>
      <span className='ml-auto'></span>
      {serverData && <ServerInfo data={serverData} className={showNavItems ? 'block' : 'hidden'} />}
      <Tooltip content="Skopiowano IP!" placement='bottom' closeDelay={1500} isOpen={copied} className={`bg-black bg-opacity-10 backdrop-blur-md py-1 px-4 rounded-xl text-sm`}>
        <button onClick={copyToClipboard} className={`bg-blue-700 bg-opacity-55 py-1.5 px-5 text-sm rounded-2xl ${showNavItems ? 'block' : 'hidden'}`}>Skopiuj IP</button>
      </Tooltip>

      {isMobile && (
        <Image alt="Menu icon" width={32} height={32} src="/menu.svg" className={`absolute top-7 left-[50%] -translate-x-[50%] -translate-y-[50%] transition-all duration-200 ${expanded && 'invisible opacity-0'}`} />
      )}
    </nav>
  );
}