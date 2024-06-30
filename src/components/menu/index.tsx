
import React from "react";
import { 
    ButtonIcon,
    Container, MenuItem, Divider
} from "./styles";
import NotificationIcon from './../../assets/sino.png'
import homeIcon from './../../assets/1 home.png'
import shortsIcon from './../../assets/2 shorts.png'
import incricoesIcon from './../../assets/3 inscricoes.png'
import seucanalIcon from './../../assets/4 Seu Canal.png'
import historicoIcon from './../../assets/5 historico.png'
import playlistsIcon from './../../assets/6 playlists.png'
import seusvideosIcon from './../../assets/7 Seus videos.png'
import assistirmaistardeIcon from './../../assets/8 Assistir mais tarde.png'
import likeIcon from './../../assets/9 like.png'
import you from './../../assets/100you.png'
import inscricoes from './../../assets/101Inscricoes.png'
import inscricoes1 from './../../assets/1001Inscricoes.png'
import emalta from './../../assets/102emalta.png'
import shopping from './../../assets/103shopping.png'
import musica from './../../assets/104Musica.png'
import filme from './../../assets/105filmes.png'
import aovivo from './../../assets/106aovivo.png'
import jogos from './../../assets/107jogos.png'
import noticias from './../../assets/108noticias.png'
import esportes from './../../assets/109Esportes.png'
import cursos from './../../assets/110cursos.png'
import podcasts from './../../assets/111Podcasts.png'
import ytpremium from './../../assets/112youtubepremium.png'
import ytstudio from './../../assets/113youtube Studio.png'
import ytmusic from './../../assets/114youtubemusic.png'
import ytkids from './../../assets/115youtubekids.png'
import configuracoes from './../../assets/116configuração.png'
import historicodenuncia from './../../assets/117Historico de denuncia.png'
import ajuda from './../../assets/118ajuda.png'
import feedback from './../../assets/119feedback.png'


// esta parte abaixo é nova
const items = [
    { icon: homeIcon, label: "Início" },
    { icon: shortsIcon, label: "Shorts" },
    { icon: incricoesIcon, label: "Inscrições" },
    { isDivider: true }, //Divisória
    { icon: you, label: "Você>", },
    { icon: seucanalIcon, label: "Seu Canal" },
    { icon: historicoIcon, label: "Histórico" },
    { icon: playlistsIcon, label: "Playlists" },
    { icon: seusvideosIcon, label: "Seus vídeos" },
    { icon: assistirmaistardeIcon, label: "Assistir mais tarde" },
    { icon: likeIcon, label: "Gostei" },
    { icon: NotificationIcon, label: "Notificações" },
];

const items1 = [
    { isDivider: true }, //Divisória
    { icon: inscricoes, label: "Inscrições" },
];

const items2 = [
    { isDivider: true }, //Divisória
    { icon: inscricoes, label: "Explorar" },
    { icon: emalta, label: "Em alta" },
    { icon: shopping, label: "Shopping" },
    { icon: musica, label: "Música" },
    { icon: filme, label: "Filmes" },
    { icon: aovivo, label: "Ao vivo" },
    { icon: jogos, label: "Jogos" },
    { icon: noticias, label: "Notícias" },
    { icon: esportes, label: "Esportes" },
    { icon: cursos, label: "Cursos" },
    { icon: podcasts, label: "Podcasts" },
];

const items3 = [
    { isDivider: true }, //Divisória
    { icon: inscricoes, label: "Mais do Youtube" },
    { icon: ytpremium, label: "YouTube Premium" },
    { icon: ytstudio, label: "YouTube Studio" },
    { icon: ytmusic, label: "Youtube Music" },
    { icon: ytkids, label: "Youtube Kids" },
];

const items4 = [
    { isDivider: true }, //Divisória
    { icon: configuracoes, label: "Configurações" },
    { icon: historicodenuncia, label: "Histórico de denúncias" },
    { icon: ajuda, label: "Ajuda" },
    { icon: feedback, label: "Enviar feedback" },
];


const items5 = [
    { isDivider: true }, //Divisória
    { icon: inscricoes1, label: "About Press Copyright" },
    { icon: inscricoes1, label: "Contact us Creators" },
    { icon: inscricoes1, label: "Advertise Developers" },
    { icon: inscricoes1, label: "Configurações" },
    { isDivider: true }, //Divisória
    { icon: inscricoes1, label: "Terms Privacy Policy & Safety" },
    { icon: inscricoes1, label: "How YouTube works" },
    { icon: inscricoes1, label: "Test new features" },
    { icon: inscricoes1, label: "© 2024 Google LLC" },
   
];



interface IProps {
    openMenu: boolean;
}

function Menu({ openMenu }: IProps) {
    return(
        <Container openMenu={openMenu}>
            {items.map((item, index) => (
                item.isDivider ? 
                <Divider key={index} /> :
                <MenuItem key={index} openMenu={openMenu}>
                    <ButtonIcon alt={item.label} src={item.icon} />
                    <span>{item.label}</span>
                </MenuItem>           
            ))}

            {items1.map((item, index) => (
                item.isDivider ? 
                <Divider key={index} /> :
                <MenuItem key={index} openMenu={openMenu}>
                    <ButtonIcon alt={item.label} src={item.icon} />
                    <span>{item.label}</span>
                </MenuItem>           
            ))}

            {items2.map((item, index) => (
                item.isDivider ? 
                <Divider key={index} /> :
                <MenuItem key={index} openMenu={openMenu}>
                    <ButtonIcon alt={item.label} src={item.icon} />
                    <span>{item.label}</span>
                </MenuItem>           
            ))}

            {items3.map((item, index) => (
                item.isDivider ? 
                <Divider key={index} /> :
                <MenuItem key={index} openMenu={openMenu}>
                    <ButtonIcon alt={item.label} src={item.icon} />
                    <span>{item.label}</span>
                </MenuItem>           
            ))}

            {items4.map((item, index) => (
                item.isDivider ? 
                <Divider key={index} /> :
                <MenuItem key={index} openMenu={openMenu}>
                    <ButtonIcon alt={item.label} src={item.icon} />
                    <span>{item.label}</span>
                </MenuItem>           
            ))}

            {items5.map((item, index) => (
                item.isDivider ? 
                <Divider key={index} /> :
                <MenuItem key={index} openMenu={openMenu}>
                    <ButtonIcon alt={item.label} src={item.icon} />
                    <span>{item.label}</span>
                </MenuItem>           
            ))}

        </Container>
    );
}

export default Menu;

