import { injectIntl } from 'gatsby-plugin-intl';
import React, { useEffect, useRef } from 'react';
import Info from '../Info';
import Title from '../Title';
import { IContactSectionProps } from './ContactSection.interface';
import * as S from './ContactSection.style';
import { theme } from '@Styles/varialbes.style';

let isMapSet = false;

const ContactSection = ({ intl }: IContactSectionProps) => {
  const mapRef = useRef<HTMLElement>(null);
  const interval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    interval.current = setInterval(() => {
      if (isMapSet) {
        clearInterval(interval.current);
        return;
      }

      const { naver } = window;
      if (!naver) return;

      isMapSet = true;
      const location = new naver.maps.LatLng(37.560925, 126.982527);
      const mapOptions: naver.maps.MapOptions = {
        center: location,
        zoom: 17,
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_RIGHT,
        },
      };
      const map = new naver.maps.Map(mapRef.current!, mapOptions);
      const marker = new naver.maps.Marker({ position: location, map });

      const contentString = `<h3 style='padding: 10px;'>법무법인 남산</h3>`;

      const infowindow = new naver.maps.InfoWindow({
        content: contentString,
        maxWidth: 140,
        backgroundColor: theme.color.white,
        borderWidth: 2,
        borderColor: theme.color.grey300,
        anchorSize: new naver.maps.Size(10, 1),
        anchorColor: theme.color.white,
        // pixelOffset: new naver.maps.Point(20, -20),
      });

      infowindow.open(map, marker);
    }, 100);
  }, []);
  return (
    <S.ContentSectionWrapper>
      <div className="title">
        <Title title={intl.formatMessage({ id: 'common.contact' })} />
      </div>
      <S.Map>
        <div className="map" ref={mapRef}></div>
      </S.Map>
      <Info.Wrapper>
        <Info.Column>
          <Info
            title={intl.formatMessage({ id: 'contact.title_address' })}
            content={intl.formatMessage({ id: 'contact.address' })}
          />
        </Info.Column>
        <Info.Column>
          <Info
            title={intl.formatMessage({ id: 'contact.title_email' })}
            content="namsan@namsanlaw.com"
          />
          <Info
            title={intl.formatMessage({ id: 'contact.title_tel' })}
            content="02-777-0550"
          />
          <Info
            title={intl.formatMessage({ id: 'contact.title_fax' })}
            content="02-754-0077"
          />
        </Info.Column>
      </Info.Wrapper>
    </S.ContentSectionWrapper>
  );
};

export default injectIntl(ContactSection);
