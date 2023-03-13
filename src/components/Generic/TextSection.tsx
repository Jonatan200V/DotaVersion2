import React from 'react';
import LinksSection from './LinkSection';
import TitlesSection from './TitleSection';
import { LinksName } from '../Header/enums';
interface TextSectionProps {
  textParagraph: string;
  nameLink: string;
  textTop: string;
  textBottom: string;
  linkTo: string;
  namePageHeader: LinksName;
  logo?: boolean;
}

export default function TextSection({
  textParagraph,
  nameLink,
  textBottom,
  textTop,
  linkTo,
  namePageHeader,
  logo,
}: TextSectionProps) {
  return (
    <div className='unete__text'>
      <TitlesSection textTop={textTop} textBottom={textBottom} logo={logo} />
      <div className='unete__orange' />
      <div className='unete__div'>
        <p className='unete__paragraph'>{textParagraph}</p>
      </div>
      {logo ? null : (
        <LinksSection
          linkTo={linkTo}
          title={nameLink}
          namePageHeader={namePageHeader}
        />
      )}
    </div>
  );
}
