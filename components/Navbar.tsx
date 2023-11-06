import { Avatar, Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import NextLink from 'next/link';

export function Navbar() {
    const address = useAddress();

    return (
        <div>
            <div>
                <Link href='/'>
                    <p>Marketplace</p>
                </Link>
                <div>
                    <Link href='/buy'>
                        <p>Buy</p>
                    </Link>
                    <Link href='/sell'>
                        <p>Sell</p>
                    </Link>
                </div>
                <div>
                    <ConnectWallet/>
                    {address && (
                        <Link href={`/profile/${address}`}>
                            {/* Image of avatar */}
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
};
