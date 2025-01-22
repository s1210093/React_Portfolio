import Timeline from "@mui/lab/Timeline";
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Container from '@mui/material/Container';
import { Box, Typography, Paper } from '@mui/material';

const timelineItems = [
    {
    year: '2017',
    title: `会津大学 コンピュータ理工学部\nコンピュータ理工学科 卒業`,
    description: `研究室ではロボット工学を専攻。\n・文字認識による測定器の表示のデータ化システムを開発`,
    },
    {
        year: '2018',
        title: `株式会社日本遮蔽技研 入社`,
        description: `研究施設への対放射線カメラシステムの納品が主な業務\n・JV向け除染現場の入退域システムの開発・運用`
    },
    {
        year: '2019',
        title: `合同会社アドシステム 入社`,
        description: `研究施設への対放射線カメラシステムの納品が主な業務\n・画像認識を用いた計器のデータ化システムの開発・運用\n・JV向け除染現場の入退域システムの開発・運用\netc...`,
    },
    {
        yaer:`2020`,
        title:`有限会社 環境総合管理機構 入社`,
        description:`環境コンサル企業で土壌の分析が主な業務。\n・自社運営コーヒー農場内のセンシング＆カメラシステムの開発・運用\n・ゴルフスイング解析ソフト開発・運用\netc...`,
    },
    {
        yaer:`2022〜`,
        title:`株式会社アドシステム　入社`,
        description:`上記の合同会社アドシステムと同じ企業。 \n対放射線カメラの制御システムの開発\nエッジAIを用いた獣害対策システムの開発\netc...`,
    },
]

export default function Timeline_Carrer() {
    return(
        <Container maxWidth="lg">
            <div style={{width:'100%', margin:'0, auto'}}>
                <Timeline position="alternate">
                    {timelineItems.map((item, index) => (
                        <TimelineItem key={item.year}>
                            <TimelineOppositeContent>
                                <Typography variant="h6">
                                    {item.year}
                                </Typography>
                            </TimelineOppositeContent>

                            <TimelineSeparator>
                                <TimelineDot color="primary" />
                                {index !== timelineItems.length - 1 && <TimelineConnector/>}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={2} sx={{ p:2 }}>
                                    <Typography variant="h6" component="span">
                                        <Box sx={{ whiteSpace: "pre-wrap"}}>{item.title}</Box>
                                    </Typography>
                                    <Typography><Box sx={{whiteSpace:"pre-wrap" }}>{item.description}</Box></Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </Container>
    )
}