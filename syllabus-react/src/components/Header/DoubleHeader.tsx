import { useState } from 'react';
import { Group, Box, Burger } from '@mantine/core';
import UTCLogo from '../../resources/utc-logo.svg';
import { useDisclosure } from '@mantine/hooks';

const mainLinks = [
  { link: '#view', label: 'View' },
  { link: '#edit', label: 'Edit' },
];

export function DoubleHeader() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(0);

  const mainItems = mainLinks.map((item, index) => (
    <a
      href={item.link}
      key={item.label}
      data-active={index === active || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(index);
      }}
      style={{fontSize:"var(--mantine-font-size-lg)",
      color:index === active ? "light-dark(var(--mantine-color-black), var(--mantine-color-white))":"light-dark(var(--mantine-color-gray-6), var(--mantine-color-dark-1))"
      ,
      fontWeight:700,margin:"0px 10px 0px 10px",
      borderBottom:"3px var(--mantine-color-blue-6)",
      borderBottomStyle:index === active ?"solid":"none"
    }}
    >
      {item.label}
    </a>
  ));

  return (
    <header>
      <div style={{display:'flex',justifyContent:"space-between",borderBottom:"1px light-dark(var(--mantine-color-gray-4), var(--mantine-color-white)) solid",height:44}}>
      <Box w={{base:100, xs:150, sm:200}} style={{marginBottom:0,marginTop:"auto"}}><img width={"100%"} src={UTCLogo} alt=""/></Box>
        <Box style={{position:"absolute", left:"50%",transform: "translateX(-50%)", top:"44px"}}>
          <Group gap={0} >
            {mainItems}
          </Group>
        </Box>
        <Burger opened={opened} onClick={toggle} aria-label="Toggle navigation" style={{outlineStyle:"none"}}>

        </Burger>

      </div>
    </header>
  );
}
