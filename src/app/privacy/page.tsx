"use client";
import React from "react";
import { useAppContext } from "@/context/appContext";

const PrivacyPolicy: React.FC = () => {
  const { language, theme } = useAppContext();

  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-800 text-gray-300" : "bg-white text-black"
      } font-sans md:p-5 p-2 pt-24 lg:pt-32`}
    >
      <h1
        className={`${
          theme === "dark" ? "text-gray-300" : "text-blue-800"
        } text-center text-2xl my-5`}
      >
        {language === "en" ? "Privacy Policy" : "Politique de confidentialité"}
      </h1>

      <div className="max-w-4xl m-auto space-y-5">
        <p className="mb-5">
          {language === "en"
            ? "At CyberPro Group, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services."
            : "Chez CyberPro Group, nous nous engageons à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site Web ou utilisez nos services."}
        </p>

        <h2 className="font-bold text-xl">
          {language === "en"
            ? "1. Information We Collect"
            : "1. Informations que nous collectons"}
        </h2>
        <p>
          {language === "en"
            ? "We may collect information about you in a variety of ways, including:"
            : "Nous pouvons collecter des informations vous concernant de différentes manières, notamment :"}
        </p>
        <ul className="list-disc pl-5">
          <li>
            {language === "en"
              ? "Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests."
              : "Données personnelles : informations personnellement identifiables, telles que votre nom, votre adresse de livraison, votre adresse électronique et votre numéro de téléphone, ainsi que des informations démographiques, telles que votre âge, votre sexe, votre ville natale et vos centres d'intérêt."}
          </li>
          <li>
            {language === "en"
              ? "Derivative Data: Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the site."
              : "Données dérivées : informations que nos serveurs collectent automatiquement lorsque vous accédez au site, telles que votre adresse IP, votre type de navigateur, votre système d'exploitation, vos heures d'accès et les pages que vous avez consultées directement avant et après avoir accédé au site."}
          </li>
        </ul>

        <h2 className="font-bold text-xl">
          {language === "en"
            ? "2. How We Use Your Information"
            : "2. Comment nous utilisons vos informations"}
        </h2>
        <p>
          {language === "en"
            ? "We may use information collected about you via the site to:"
            : "Nous pouvons utiliser les informations collectées vous concernant via le site pour :"}
        </p>
        <ul className="list-disc pl-5">
          <li>
            {language === "en"
              ? "Create and manage your account."
              : "Créer et gérer votre compte."}
          </li>
          <li>
            {language === "en"
              ? "Send you email notifications."
              : "Vous envoyer des notifications par e-mail."}
          </li>
          <li>
            {language === "en"
              ? "Respond to inquiries and support requests."
              : "Répondre aux demandes de renseignements et aux demandes d'assistance."}
          </li>
          <li>
            {language === "en"
              ? "Improve our website and services."
              : "Améliorer notre site Web et nos services."}
          </li>
        </ul>

        <h2 className="font-bold text-xl">
          {language === "en"
            ? "3. Disclosure of Your Information"
            : "3. Divulgation de vos informations"}
        </h2>
        <p>
          {language === "en"
            ? "We may share information we have collected about you in certain situations. Your information may be disclosed as follows:"
            : "Nous pouvons partager les informations que nous avons collectées vous concernant dans certaines situations. Vos informations peuvent être divulguées comme suit :"}
        </p>
        <ul className="list-disc pl-5">
          <li>
            {language === "en"
              ? "By Law or to Protect Rights: If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation."
              : "Par la loi ou pour protéger les droits : si nous croyons que la divulgation d'informations vous concernant est nécessaire pour répondre à des procédures judiciaires, pour enquêter ou remédier à des violations potentielles de nos politiques, ou pour protéger les droits, les biens et la sécurité d'autrui, nous pouvons partager vos informations comme le permet ou l'exige toute loi, règle ou réglementation applicable."}
          </li>
          <li>
            {language === "en"
              ? "Third-Party Service Providers: We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance."
              : "Fournisseurs de services tiers : nous pouvons partager vos informations avec des tiers qui effectuent des services pour nous ou en notre nom, y compris le traitement des paiements, l'analyse des données, la livraison d'e-mails, les services d'hébergement, le service client et l'assistance marketing."}
          </li>
        </ul>

        <h2 className="font-bold text-xl">
          {language === "en"
            ? "4. Security of Your Information"
            : "4. Sécurité de vos informations"}
        </h2>
        <p>
          {language === "en"
            ? "We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee its absolute security."
            : "Nous utilisons des mesures de sécurité administratives, techniques et physiques pour aider à protéger vos informations personnelles. Bien que nous ayons pris des mesures raisonnables pour sécuriser les informations personnelles que vous nous fournissez, veuillez être conscient qu'aucune méthode de transmission sur Internet ou méthode de stockage électronique n'est 100 % sécurisée, et nous ne pouvons garantir sa sécurité absolue."}
        </p>

        <h2 className="font-bold text-xl">
          {language === "en"
            ? "5. Changes to This Privacy Policy"
            : "5. Modifications de cette politique de confidentialité"}
        </h2>
        <p>
          {language === "en"
            ? "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes."
            : "Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement en publiant la nouvelle politique de confidentialité sur notre site Web. Vous êtes invité à consulter cette politique de confidentialité périodiquement pour toute modification."}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
