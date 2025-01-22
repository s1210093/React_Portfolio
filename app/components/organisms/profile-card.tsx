import { Card } from "@chakra-ui/react";
import Box from "@mui/material/Box";
import { Avatar } from "../ui/avatar";

const profileCard = () => {
    return(
    <>
    <Card.Root>
        <Card.Header />
        <Card.Body gap="2">
            <Avatar
                src=""
                name="Ken Sato"
                size="lg"
                shape="rounded"
            />
        <Card.Title mt="2">佐藤 拳</Card.Title>
        <Card.Description>
            <Box>
                福島県郡山市出身<br />
                茨城県常陸大宮市在住
            </Box>
        </Card.Description>
        </Card.Body>
    </Card.Root>
    </>
    )
}

export default profileCard;