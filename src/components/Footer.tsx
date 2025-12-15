import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { Link } from 'expo-router';
import { Container } from './Container';
import { Logo } from './Logo';
import { COMPANY_INFO, PRACTICE_AREAS, NAVIGATION } from '../constants/content';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024;

  return (
    <View style={styles.footer}>
      <Container>
        <View style={[styles.footerContent, isDesktop && styles.footerContentDesktop]}>
          
          {/* Brand & Contact */}
          <View style={styles.footerColumn}>
            <View style={styles.logoContainer}>
              <Logo color="white" accent="#2563eb" width={250} height={50} variant="full" />
            </View>
            <Text style={styles.footerDescription}>
              Dedicated to protecting consumers from fraud, deception, and unfair practices.
            </Text>
            <View style={styles.contactInfo}>
              <Text style={styles.phone}>{COMPANY_INFO.phone}</Text>
              <Text style={styles.address}>{COMPANY_INFO.address.street}, {COMPANY_INFO.address.suite}</Text>
              <Text style={styles.address}>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} {COMPANY_INFO.address.zip}</Text>
              <Text style={[styles.address, { marginTop: 8 }]}>{COMPANY_INFO.email}</Text>
            </View>
          </View>

          {/* Quick Links */}
          <View style={styles.footerColumn}>
            <Text style={styles.footerHeading}>Quick Links</Text>
            <View style={styles.linksContainer}>
              {NAVIGATION.map(item => (
                <Link key={item.title} href={item.href as any} asChild>
                  <TouchableOpacity>
                    <Text style={styles.footerLink}>{item.title}</Text>
                  </TouchableOpacity>
                </Link>
              ))}
              <Link href="/resources/pay-online" asChild>
                <TouchableOpacity>
                  <Text style={styles.footerLink}>Pay Online</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>

          {/* Practice Areas */}
          <View style={styles.footerColumn}>
            <Text style={styles.footerHeading}>Practice Areas</Text>
            <View style={styles.practiceAreasContainer}>
              {PRACTICE_AREAS.slice(0, 6).map(area => (
                <Link key={area.id} href={`/practice-areas/${area.slug}` as any} asChild>
                  <TouchableOpacity>
                    <Text style={styles.practiceAreaLink}>{area.title}</Text>
                  </TouchableOpacity>
                </Link>
              ))}
            </View>
          </View>

        </View>

        <View style={[styles.footerBottom, isDesktop && styles.footerBottomDesktop]}>
          <Text style={styles.copyright}>
            © {currentYear} {COMPANY_INFO.name}. All rights reserved.
          </Text>
          <View style={styles.legalLinks}>
            <TouchableOpacity><Text style={styles.legalLink}>Privacy Policy</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.legalLink}>Terms of Service</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.legalLink}>Disclaimer</Text></TouchableOpacity>
          </View>
        </View>
        
        <Text style={styles.disclaimer}>
          Attorney Advertising. The information on this website is for general information purposes only. 
          Nothing on this site should be taken as legal advice for any individual case or situation. 
          This information is not intended to create, and receipt or viewing does not constitute, an attorney-client relationship.
        </Text>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: '#0f172a',
    paddingVertical: 64,
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
  },
  footerContent: {
    flexDirection: 'column',
    gap: 48,
    marginBottom: 64,
  },
  footerContentDesktop: {
    flexDirection: 'row',
    gap: 48,
  },
  footerColumn: {
    flex: 1,
  },
  logoContainer: {
    marginBottom: 24,
  },
  footerDescription: {
    fontSize: 18,
    marginBottom: 24,
    lineHeight: 28,
    maxWidth: 384,
    color: '#94a3b8',
    letterSpacing: 0.1,
  },
  contactInfo: {
    gap: 8,
  },
  phone: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  address: {
    color: '#94a3b8',
    fontSize: 15,
    lineHeight: 24,
  },
  footerHeading: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 24,
  },
  linksContainer: {
    gap: 12,
  },
  footerLink: {
    color: '#94a3b8',
    fontSize: 15,
    lineHeight: 24,
  },
  practiceAreasContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    rowGap: 12,
  },
  practiceAreaLink: {
    color: '#94a3b8',
    fontSize: 14,
    lineHeight: 22,
  },
  footerBottom: {
    borderTopWidth: 1,
    borderTopColor: '#1e293b',
    paddingTop: 32,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: 16,
  },
  footerBottomDesktop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  copyright: {
    fontSize: 14,
    color: '#64748b',
  },
  legalLinks: {
    flexDirection: 'row',
    gap: 24,
  },
  legalLink: {
    fontSize: 14,
    color: '#64748b',
  },
  disclaimer: {
    fontSize: 12,
    color: '#475569',
    marginTop: 32,
    textAlign: 'center',
    maxWidth: 768,
    alignSelf: 'center',
    lineHeight: 18,
  },
});
