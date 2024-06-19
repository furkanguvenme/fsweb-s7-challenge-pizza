import styled from "styled-components";
import { FaSquareXTwitter } from "react-icons/fa6";

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-family: "Barlow";
  padding: 50px 50px 20px 50px;
  color: white;
`;

const FooterTop1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 25px;
`;

const FooterNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 25px;
`;

const NavA = styled.a`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: white;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16.25vw;
  font-family: "Barlow";
  color: white;
`;

const InstaDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
`;

const H2 = styled.h2`
  font-weight: 400;
`;

const Cizgi = styled.div`
  background-color: #8f8c8c;
  width: 100%;
  height: 1px;
`;

export default function Footer() {
  return (
    <>
      <FooterTop style={{ backgroundColor: "black" }}>
        <FooterTop1>
          <div>
            <div>
              {" "}
              <img src="./Assets/mile2-aseets/footer/logo-footer.svg" />
            </div>
            <FooterNav>
              <NavA href="#">
                <img
                  style={{ marginRight: "10px" }}
                  src="./Assets/mile2-aseets/footer/icons/icon-1.png"
                />
                341 Londonderry Road,
                <br /> Istanbul Türkiye
              </NavA>
              <NavA href="#">
                <img
                  style={{ marginRight: "10px" }}
                  src="./Assets/mile2-aseets/footer/icons/icon-2.png"
                />
                aciktim@teknolojikyemekler.com
              </NavA>
              <NavA href="#">
                <img
                  style={{ marginRight: "10px" }}
                  src="./Assets/mile2-aseets/footer/icons/icon-3.png"
                />
                +90 216 123 45 67
              </NavA>
            </FooterNav>
          </div>
          <div>
            <H2 style={{ marginBottom: "60px" }}>Sıccacık Menuler</H2>
            <p>Terminal Pizza</p>
            <p>5 Kişilik Hechathion Pizza</p>
            <p>useEffect Tavuklu Pizza</p>
            <p>Beyaz Console Frosty</p>
            <p>Testler Geçti Mutlu Burger</p>
            <p>Position Absolute Acı Burger</p>
          </div>
        </FooterTop1>
        <div>
          <H2>Instagram</H2>
          <InstaDiv>
            <img
              src="./Assets/mile2-aseets/footer/insta/li-0.png"
              style={{ scale: "0.9" }}
            />
            <img
              src="./Assets/mile2-aseets/footer/insta/li-1.png"
              style={{ scale: "0.9" }}
            />
            <img
              src="./Assets/mile2-aseets/footer/insta/li-2.png"
              style={{ scale: "0.9" }}
            />
            <img
              src="./Assets/mile2-aseets/footer/insta/li-3.png"
              style={{ scale: "0.9" }}
            />
            <img
              src="./Assets/mile2-aseets/footer/insta/li-4.png"
              style={{ scale: "0.9" }}
            />
            <img
              src="./Assets/mile2-aseets/footer/insta/li-5.png"
              style={{ scale: "0.9" }}
            />
          </InstaDiv>
        </div>
      </FooterTop>
      <Cizgi />
      <FooterBottom style={{ backgroundColor: "black", paddingTop: "15px" }}>
        <p>© 2023 Teknolojik Yemekler</p>
        <p>
          <FaSquareXTwitter style={{ scale: "1.5" }} />
        </p>
      </FooterBottom>
    </>
  );
}