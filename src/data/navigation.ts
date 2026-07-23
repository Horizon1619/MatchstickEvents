export interface NavLink {
      label: string;
        href: string;
        }

        const NAV_LINKS: NavLink[] = [
          { label: 'Home', href: '#' },
            { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
                { label: 'Gallery', href: '#gallery' },
                  { label: 'Previous Events', href: '#previous-events' },
                    { label: 'Contact', href: '#contact' },
                    ];

                    export default NAV_LINKS;