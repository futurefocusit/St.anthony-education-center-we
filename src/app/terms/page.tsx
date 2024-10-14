"use client";

import React from "react";
import { useAppContext } from "@/context/appContext";

const content = {
  en: {
    title: "Terms of Use for CyberPro Group Website",
    lastUpdated: "Last Updated: 11 October 2024",
    sections: [
      {
        title: "Welcome",
        content: "Welcome to the CyberPro Group Terms of Use agreement.",
      },
      {
        title: "Definitions",
        content:
          'For purposes of this agreement, "Site" refers to the Company\'s website, which can be accessed at www.cyberprogroup.com. "Service" refers to the Company\'s services accessed via the Site, in which users can access our services of Cyberpro Academy (cybersecurity training), Cybersecurity Consulting, and CCTV Camera Security Solutions. The terms "we," "us," and "our" refer to the Company. "You" refers to you, as a user of our Site or our Service.',
      },
      {
        title: "Applicability",
        content:
          "The following Terms of Use apply when you view or use the Service via our website located at www.cyberprogroup.com. Please review the following terms carefully. By accessing or using the Service, you signify your agreement to these Terms of Use. If you do not agree to be bound by these Terms of Use in their entirety, you may not access or use the Service.",
      },
      {
        title: "Privacy Policy",
        content:
          "The Company respects the privacy of its Service users. Please refer to the Company's Privacy Policy which explains how we collect, use, and disclose information that pertains to your privacy. When you access or use the Service, you signify your agreement to the Privacy Policy as well as these Terms of Use.",
      },
      {
        title: "About the Service",
        content:
          "The Service allows you to explore our services of Cyberpro Academy (cybersecurity training), Cybersecurity Consulting, and CCTV Camera Security Solutions.",
      },
      {
        title: "Registration",
        content:
          "You need to be at least 13 years old to register for and use the Service. If you are a user who signs up for the Service, you will create a personalized account which includes a unique username and a password to access the Service and to receive messages from the Company. You agree to notify us immediately of any unauthorized use of your password and/or account. The Company will not be responsible for any liabilities, losses, or damages arising out of the unauthorized use of your member name, password and/or account.",
      },
      {
        title: "Use Restrictions",
        content:
          "Your permission to use the Site is conditioned upon the following use, posting and conduct restrictions: You agree that you will not under any circumstances:",
        list: [
          "Access the Service for any reason other than your personal, non-commercial use solely as permitted by the normal functionality of the Service,",
          "Collect or harvest any personal data of any user of the Site or the Service",
          "Use the Site or the Service for the solicitation of business in the course of trade or in connection with a commercial enterprise;",
          "Distribute any part or parts of the Site or the Service without our explicit written permission",
          "Use the Service for any unlawful purpose or for the promotion of illegal activities;",
          "Attempt to, or harass, abuse or harm another person or group;",
          "Use another user's account without permission;",
          "Intentionally allow another user to access your account;",
          "Provide false or inaccurate information when registering an account;",
          "Interfere or attempt to interfere with the proper functioning of the Service;",
          "Make any automated use of the Site, the Service or the related systems, or take any action that we deem to impose or to potentially impose an unreasonable or disproportionately large load on our servers or network infrastructure;",
          "Bypass any robot exclusion headers or other measures we take to restrict access to the Service;",
          "Circumvent, disable or otherwise interfere with any security-related features of the Service or features that prevent or restrict use or copying of content;",
          "Publish or link to malicious content intended to damage or disrupt another user's browser or computer.",
        ],
      },
    ],
  },
  fr: {
    title: "Conditions d'utilisation du site Web de CyberPro Group",
    lastUpdated: "Dernière mise à jour : 11 octobre 2024",
    sections: [
      {
        title: "Bienvenue",
        content:
          "Bienvenue dans l'accord sur les conditions d'utilisation de CyberPro Group.",
      },
      {
        title: "Définitions",
        content:
          'Aux fins du présent accord, "Site" fait référence au site Web de la Société, accessible à l\'adresse www.cyberprogroup.com. "Service" fait référence aux services de la Société accessibles via le Site, dans lesquels les utilisateurs peuvent accéder à nos services de Cyberpro Academy (formation en cybersécurité), de conseil en cybersécurité et de solutions de sécurité par caméras de vidéosurveillance. Les termes "nous", "notre" et "nos" font référence à la Société. "Vous" fait référence à vous, en tant qu\'utilisateur de notre Site ou de notre Service.',
      },
      {
        title: "Applicabilité",
        content:
          "Les conditions d'utilisation suivantes s'appliquent lorsque vous consultez ou utilisez le Service via notre site Web situé à l'adresse www.cyberprogroup.com. Veuillez lire attentivement les conditions suivantes. En accédant au Service ou en l'utilisant, vous signifiez votre accord avec ces Conditions d'utilisation. Si vous n'acceptez pas d'être lié par l'intégralité de ces Conditions d'utilisation, vous ne pouvez pas accéder au Service ni l'utiliser.",
      },
      {
        title: "Politique de confidentialité",
        content:
          "La Société respecte la vie privée de ses utilisateurs du Service. Veuillez vous référer à la Politique de confidentialité de la Société qui explique comment nous collectons, utilisons et divulguons les informations relatives à votre vie privée. Lorsque vous accédez au Service ou l'utilisez, vous signifiez votre accord avec la Politique de confidentialité ainsi qu'avec ces Conditions d'utilisation.",
      },
      {
        title: "À propos du Service",
        content:
          "Le Service vous permet d'explorer nos services de Cyberpro Academy (formation en cybersécurité), de conseil en cybersécurité et de solutions de sécurité par caméras de vidéosurveillance.",
      },
      {
        title: "Inscription",
        content:
          "Vous devez avoir au moins 13 ans pour vous inscrire et utiliser le Service. Si vous êtes un utilisateur qui s'inscrit au Service, vous créerez un compte personnalisé qui comprend un nom d'utilisateur unique et un mot de passe pour accéder au Service et recevoir des messages de la Société. Vous acceptez de nous informer immédiatement de toute utilisation non autorisée de votre mot de passe et/ou de votre compte. La Société ne sera pas responsable des responsabilités, pertes ou dommages résultant de l'utilisation non autorisée de votre nom de membre, mot de passe et/ou compte.",
      },
      {
        title: "Restrictions d'utilisation",
        content:
          "Votre autorisation d'utiliser le Site est conditionnée par les restrictions d'utilisation, de publication et de conduite suivantes : Vous acceptez que vous ne devrez en aucun cas :",
        list: [
          "Accéder au Service pour toute raison autre que votre utilisation personnelle et non commerciale, uniquement selon les fonctionnalités normales du Service,",
          "Collecter ou récolter des données personnelles de tout utilisateur du Site ou du Service",
          "Utiliser le Site ou le Service pour la sollicitation d'affaires dans le cadre d'un commerce ou en lien avec une entreprise commerciale;",
          "Distribuer toute partie du Site ou du Service sans notre autorisation écrite explicite",
          "Utiliser le Service à des fins illégales ou pour la promotion d'activités illégales;",
          "Tenter de harceler, abuser ou nuire à une autre personne ou un groupe;",
          "Utiliser le compte d'un autre utilisateur sans autorisation;",
          "Permettre intentionnellement à un autre utilisateur d'accéder à votre compte;",
          "Fournir des informations fausses ou inexactes lors de l'inscription d'un compte;",
          "Interférer ou tenter d'interférer avec le bon fonctionnement du Service;",
          "Faire une utilisation automatisée du Site, du Service ou des systèmes associés, ou prendre toute action que nous jugeons imposer ou potentiellement imposer une charge déraisonnable ou disproportionnée sur nos serveurs ou notre infrastructure réseau;",
          "Contourner les en-têtes d'exclusion des robots ou d'autres mesures que nous prenons pour restreindre l'accès au Service;",
          "Contourner, désactiver ou interférer de quelque manière que ce soit avec les fonctionnalités liées à la sécurité du Service ou les fonctionnalités qui empêchent ou restreignent l'utilisation ou la copie de contenu;",
          "Publier ou lier à du contenu malveillant destiné à endommager ou perturber le navigateur ou l'ordinateur d'un autre utilisateur.",
        ],
      },
    ],
  },
};

const TermsOfUse = () => {
  const { language, theme } = useAppContext();

  const currentContent = content[language];

  return (
    <div
      className={`${
        theme === "dark" ? "bg-slate-800 text-gray-300" : "bg-white text-black"
      } font-sans px-4 pt-52 relative`}
    >
      <h1
        className={`${
          theme === "dark" ? "text-gray-300" : "text-blue-800"
        } text-center text-3xl mb-8`}
      >
        {currentContent.title}
      </h1>
      <div className="max-w-4xl mx-auto space-y-6">
        <div
          className={`bg-opacity-50 ${
            theme === "light" ? "bg-gray-100" : "bg-gray-700"
          } p-4 rounded-lg`}
        >
          <p className="mb-4">{currentContent.lastUpdated}</p>
        </div>
        {currentContent.sections.map((section, index) => (
          <div
            key={index}
            className={`bg-opacity-50 ${
              theme === "light" ? "bg-gray-100" : "bg-gray-700"
            } p-4 rounded-lg`}
          >
            <h2 className="text-xl font-bold mb-2">{section.title}</h2>
            <p>{section.content}</p>
            {section.list && (
              <ul className="list-disc pl-5 mt-2">
                {section.list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsOfUse;
