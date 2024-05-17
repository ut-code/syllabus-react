import { Anchor, Group, ActionIcon, rem } from '@mantine/core';
import { IconBrandTwitter, IconWorld } from '@tabler/icons-react';
import classes from './Footer.module.css';

const links = [
    { link: '#', label: 'ご意見' },
    { link: '#', label: '使い方' },
    { link: '#', label: '履修上の注意' },
    { link: '#', label: '免責事項' }
  ];
  
  export function FooterCentered() {
    const items = links.map((link) => (
      <Anchor
        c="dimmed"
        key={link.label}
        href={link.link}
        lh={1}
        onClick={(event) => event.preventDefault()}
        size="sm"
      >
        {link.label}
      </Anchor>
    ));
  
    return (
      <div className={classes.footer}>
        <div className={classes.inner}>
  
          <Group className={classes.links}>{items}</Group>
  
          <Group gap="xs" justify="flex-end" wrap="nowrap">
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" variant="default" radius="xl">
              <IconWorld style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          </Group>
        </div>
      </div>
    );
  }