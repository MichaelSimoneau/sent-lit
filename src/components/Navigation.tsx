import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Platform, useWindowDimensions, StyleSheet, Dimensions } from 'react-native';
import { Link } from 'expo-router';
import { Container } from './Container';
import { NAVIGATION, COMPANY_INFO } from '../constants/content';
import { AISearch } from './AISearch';
import { Logo } from './Logo';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { width } = useWindowDimensions();
  const isDesktop = width >= 1024; // lg breakpoint

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (isDesktop && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isDesktop, isMenuOpen]);

  const toggleDropdown = (title: string) => {
    if (activeDropdown === title) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(title);
    }
  };

  return (
    <View style={styles.navContainer}>
      {/* Top Bar - Phone */}
      <View style={styles.topBar}>
        <Container>
          <View style={styles.topBarContent}>
            <Text style={styles.topBarText}>Call Us Today!</Text>
            <Text style={styles.topBarPhone}>{COMPANY_INFO.phone}</Text>
          </View>
        </Container>
      </View>

      <Container>
        <View style={styles.navContent}>
          {/* Logo */}
          <Link href="/" asChild>
            <TouchableOpacity style={styles.logoContainer}>
              <Logo width={280} height={60} variant="wordmark" />
            </TouchableOpacity>
          </Link>

          {/* Desktop Search */}
          {isDesktop && (
            <View style={styles.searchContainer}>
              <AISearch />
            </View>
          )}

          {/* Desktop Nav */}
          {isDesktop && (
            <View style={styles.desktopNav}>
            {NAVIGATION.map((item) => (
              <View key={item.title} style={styles.navItemWrapper}>
                {item.children ? (
                  <TouchableOpacity 
                    style={styles.navItem}
                    onPress={() => toggleDropdown(item.title)}
                  >
                    <Text style={styles.navItemText}>
                      {item.title} {activeDropdown === item.title ? '▼' : '▶'}
                    </Text>
                  </TouchableOpacity>
                ) : (
                  <Link href={item.href as any} asChild>
                    <TouchableOpacity style={styles.navItem} onPress={() => setActiveDropdown(null)}>
                      <Text style={styles.navItemText}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  </Link>
                )}
                
                {/* Desktop Dropdown */}
                {item.children && activeDropdown === item.title && (
                  <View style={styles.dropdown}>
                    {item.children.map((child) => (
                      <Link key={child.title} href={child.href as any} asChild>
                        <TouchableOpacity style={styles.dropdownItem}>
                          <Text style={styles.dropdownItemText}>
                            {child.title}
                          </Text>
                        </TouchableOpacity>
                      </Link>
                    ))}
                  </View>
                )}
              </View>
            ))}
            
            <Link href="/contact" asChild>
              <TouchableOpacity style={styles.ctaButton}>
                <Text style={styles.ctaButtonText}>Free Consultation</Text>
              </TouchableOpacity>
            </Link>
          </View>
          )}

          {/* Mobile Menu Button */}
          {!isDesktop && (
            <TouchableOpacity 
              style={styles.menuButton}
              onPress={() => setIsMenuOpen(!isMenuOpen)}
            >
            <View style={styles.menuIcon}>
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
              <View style={styles.menuLine} />
            </View>
          </TouchableOpacity>
          )}
        </View>

        {/* Mobile Menu */}
        {!isDesktop && isMenuOpen && (
          <ScrollView style={styles.mobileMenu}>
            <View style={styles.mobileSearchContainer}>
              <AISearch />
            </View>
            
            {NAVIGATION.map((item) => (
              <View key={item.title}>
                <TouchableOpacity 
                  style={styles.mobileNavItem}
                  onPress={() => item.children ? toggleDropdown(item.title) : null}
                >
                  <Link href={item.href as any} asChild>
                    <TouchableOpacity onPress={() => setIsMenuOpen(false)}>
                      <Text style={styles.mobileNavText}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  </Link>
                  {item.children && (
                    <Text style={styles.mobileNavIndicator}>{activeDropdown === item.title ? '−' : '+'}</Text>
                  )}
                </TouchableOpacity>
                
                {/* Mobile Submenu */}
                {item.children && activeDropdown === item.title && (
                  <View style={styles.mobileSubmenu}>
                    {item.children.map((child) => (
                      <Link key={child.title} href={child.href as any} asChild>
                        <TouchableOpacity 
                          style={styles.mobileSubmenuItem}
                          onPress={() => setIsMenuOpen(false)}
                        >
                          <Text style={styles.mobileSubmenuText}>
                            {child.title}
                          </Text>
                        </TouchableOpacity>
                      </Link>
                    ))}
                  </View>
                )}
              </View>
            ))}
            
            <View style={styles.mobileCtaContainer}>
              <TouchableOpacity style={styles.mobileCtaButton}>
                <Text style={styles.mobileCtaText}>Free Consultation</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        )}
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    backgroundColor: Platform.OS === 'web' ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    position: 'relative',
    ...(Platform.OS === 'web' && { position: 'sticky' as any, top: 0 }),
    zIndex: 50,
  },
  topBar: {
    backgroundColor: '#f8fafc',
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  topBarContent: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  topBarText: {
    color: '#64748b',
    fontSize: 12,
    marginRight: 8,
  },
  topBarPhone: {
    color: '#0f172a',
    fontWeight: 'bold',
    fontSize: 14,
  },
  navContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 80,
    gap: 16,
  },
  logoContainer: {
    flexShrink: 0,
    minWidth: 200,
  },
  searchContainer: {
    flex: 1,
    maxWidth: 400,
    marginHorizontal: 16,
    minWidth: 200,
  },
  desktopNav: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    flexShrink: 0,
  },
  navItemWrapper: {
    position: 'relative',
    zIndex: 10,
  },
  navItem: {
    paddingVertical: 8,
  },
  navItemText: {
    color: '#334155',
    fontWeight: '500',
    fontSize: 15,
  },
  dropdown: {
    position: 'absolute',
    top: '100%',
    left: 0,
    marginTop: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    minWidth: 192,
    paddingVertical: 8,
  },
  dropdownItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  dropdownItemText: {
    color: '#334155',
    fontSize: 14,
  },
  ctaButton: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  ctaButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  menuButton: {
    padding: 8,
  },
  menuIcon: {
    gap: 6,
  },
  menuLine: {
    width: 24,
    height: 2,
    backgroundColor: '#1e293b',
  },
  mobileMenu: {
    maxHeight: Platform.OS === 'web' ? Dimensions.get('window').height * 0.8 : undefined,
    borderTopWidth: 1,
    borderTopColor: '#f1f5f9',
    paddingVertical: 16,
  },
  mobileSearchContainer: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  mobileNavItem: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mobileNavText: {
    color: '#1e293b',
    fontWeight: '600',
    fontSize: 18,
  },
  mobileNavIndicator: {
    color: '#94a3b8',
  },
  mobileSubmenu: {
    backgroundColor: '#f8fafc',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  mobileSubmenuItem: {
    paddingVertical: 8,
    paddingLeft: 16,
    borderLeftWidth: 2,
    borderLeftColor: '#e2e8f0',
    marginLeft: 4,
  },
  mobileSubmenuText: {
    color: '#475569',
    fontSize: 15,
  },
  mobileCtaContainer: {
    padding: 16,
    marginTop: 16,
  },
  mobileCtaButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  mobileCtaText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
