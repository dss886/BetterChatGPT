import React, { useState } from 'react';
import { useTranslation, Trans } from 'react-i18next';
import PopupModal from '@components/PopupModal';
import AboutIcon from '@icon/AboutIcon';

const AboutMenu = () => {
  const { t } = useTranslation(['main', 'about']);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <a
        className='flex py-2 px-2 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm'
        onClick={() => {
          setIsModalOpen(true);
        }}
      >
        <div>
          <AboutIcon />
        </div>
        {t('about')}
      </a>
      {isModalOpen && (
        <PopupModal
          title={t('about') as string}
          setIsModalOpen={setIsModalOpen}
          cancelButton={false}
        >
          <div className='p-6 border-b border-gray-200 dark:border-gray-600'>
            <div className='min-w-fit text-gray-900 dark:text-gray-300 text-sm flex flex-col gap-3 leading-relaxed'>
              <p>
                <Trans
                  i18nKey='sourceCode'
                  ns='about'
                  components={[
                    <a
                      href='https://github.com/ztjhz/BetterChatGPT'
                      target='_blank'
                      className='link'
                    />,
                  ]}
                />
              </p>
            </div>
          </div>
        </PopupModal>
      )}
    </>
  );
};

export default AboutMenu;
