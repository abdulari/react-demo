import { AppShell, Burger, Grid, NavLink } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { FaReact, FaHome,FaHeart  } from "react-icons/fa";
import { useLocation } from 'react-router';

function Layout(props: { children: React.ReactNode }) {
    const [opened, { toggle }] = useDisclosure();

    const location = useLocation();

    console.dir(location)
    return (
        <AppShell
            padding="md"
            header={{ height: 60 }}
            navbar={{
                width: 150,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
        >
            <AppShell.Header>
                <div>
                    <Grid>
                        <Grid.Col hiddenFrom='sm' span="content">
                            <Burger
                                opened={opened}
                                onClick={toggle}
                                hiddenFrom="sm"
                                size={50}
                            />
                        </Grid.Col>
                        <Grid.Col span="content">
                            <FaReact size={60} color="cyan" />
                        </Grid.Col>
                        <Grid.Col span="auto">
                            <div style={{ display: "relative", marginTop: 10, fontSize: 20 }}>
                                preview for <a target="_blank" href="https://github.com/abdulari/react-demo">github.com/abdulari/react-demo</a>
                            </div>
                        </Grid.Col>
                    </Grid>
                </div>
            </AppShell.Header>

            <AppShell.Navbar>
                <NavLink
                    active={location.pathname === "/"}
                    href="/#/"
                    label="Home"
                    leftSection={<FaHome size={16} />}
                />
                <NavLink
                    active={location.pathname === "/zustand-demo"}
                    href="/#/zustand-demo"
                    label="Zustand Demo"
                    leftSection={<FaHeart  size={16} color="red"/>}
                />
            </AppShell.Navbar>

            <AppShell.Main>
                {props.children}
            </AppShell.Main>
        </AppShell>
    )
}
export default Layout;