import { AppShell, Burger, Center, Grid, NavLink,Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useLocation } from 'react-router';

// icons
import { FaReact, FaHome, FaHeart } from "react-icons/fa";
import { PiConfettiFill } from "react-icons/pi";
import { MdAltRoute } from "react-icons/md";

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
                        <Grid.Col span="auto" >
                            <Center inline style={{ height: "90%" }}>
                                <Text size="xl">
                                    <a href="https://github.com/abdulari/react-demo" target="_blank"> abdulari/react-demo</a>
                                </Text>
                            </Center>
                        </Grid.Col>
                    </Grid>
                </div>
            </AppShell.Header>

            <AppShell.Navbar>
                <NavLink
                    active={location.pathname === "/"}
                    href="/#/"
                    label="Home"
                    leftSection={<FaHome size={20} color="orange" />}
                />
                <NavLink
                    active={location.pathname === "/confetti-demo"}
                    href="/#/confetti-demo"
                    label="Confetti Demo"
                    leftSection={<PiConfettiFill size={20} color="brown" />}
                />
                <NavLink
                    active={location.pathname === "/zustand-demo"}
                    href="/#/zustand-demo"
                    label="Zustand Demo"
                    leftSection={<FaHeart size={20} color="red" />}
                />
                <NavLink
                    active={location.pathname === "/react-router-demo"}
                    href="/#/react-router-demo"
                    label="React Router Demo"
                    leftSection={<MdAltRoute size={25} color="darkgreen" />}
                />
            </AppShell.Navbar>

            <AppShell.Main>
                {props.children}
            </AppShell.Main>
        </AppShell>
    )
}
export default Layout;