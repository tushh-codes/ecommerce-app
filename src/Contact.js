import styled from 'styled-components';
const Wrapper = styled.section`
  padding: 3rem 0 2rem 0;
  text-align: center;

  .contact_wrapper {
    padding: 0 5vw 0 5vw;
    display: flex;
    width: 90vw;
    justify-content: center;
    gap: 10rem;
    align-items: center;
    height: 60vh;
  }

  .container {
    padding: 2rem;
    width: 40vw;
    margin-top: 6rem;

    .contact-form {
      max-width: 50rem;
      margin: auto;

      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        input[type='submit'] {
          cursor: pointer;
          transition: all 0.2s;

          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
const Contact = () => {
  return (
    <>
      <Wrapper>
        <h2 className='common-heading'>Contact Us</h2>
        <div className='contact_wrapper'>
          <iframe
            title='clebrationMall'
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.3249242572956!2d73.69990301105256!3d24.612483655043928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e5a9f395db53%3A0x3346b119af64b7f7!2sNexus%20Celebration%20Mall%2C%20Udaipur!5e0!3m2!1sen!2sin!4v1697970004523!5m2!1sen!2sin'
            width='70%'
            height='400'
            style={{ border: 0 }}
            allowFullScreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>

          <div className='container'>
            <div className='contact-form'>
              <form
                action='https://formspree.io/f/mrgwjepl'
                method='POST'
                className='contact-inputs'
              >
                <input
                  type='text'
                  placeholder='username'
                  name='username'
                  required
                  autoComplete='off'
                />
                <input
                  type='email'
                  name='email'
                  placeholder='Enter your E-mail'
                  autoComplete='off'
                  required
                />

                <textarea
                  name='Message'
                  cols='30'
                  rows='10'
                  placeholder='Enter Your Message'
                ></textarea>
                <input type='submit' value='Send' />
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;
